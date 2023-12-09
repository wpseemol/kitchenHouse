const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middlewares
app.use(
    cors({
        origin: [
            'http://localhost:5173',
            'https://kitchen-house-7ca59.web.app',
            'https://capable-faloodeh-7aef99.netlify.app',
        ],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

const secret = process.env.SECRET;

const verifyToken = async (request, response, next) => {
    const token = request.cookies['access-token'];
    if (!token) {
        return response.status(401).send({ message: 'unauthorized' });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return response.status(401).send({ message: 'unauthorized' });
        }

        request.user = decoded;
        next();
    });
};

app.get('/', (request, response) => {
    response.send('Server is running...');
});

app.listen(port, () => {
    console.log('Running Port: ' + port);
});

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//come from dotenv.
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.s0x7bvc.mongodb.net/?retryWrites=true&w=majority`;

// Create a  MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)

        const kitchenHouse = client.db('kitchenHouse');

        const itemsCollection = kitchenHouse.collection('items');
        const cardsCollection = kitchenHouse.collection('cards');

        //get all food items.
        app.get('/food-items', async (request, response) => {
            const cursorItems = itemsCollection.find();

            const resultItems = await cursorItems.toArray();
            response.send(resultItems);
        });

        // get to sell Product
        app.get('/top-sell', async (request, response) => {
            const sort = { buyCount: -1 };
            const offset = 0;
            const limit = 5;
            const cursorItems = itemsCollection
                .find()
                .sort(sort)
                .skip(offset)
                .limit(limit);

            const result = await cursorItems.toArray();
            response.send(result);
        });
        //cardItem get
        app.get('/card-data', verifyToken, async (request, response) => {
            const email = request?.user?.email;

            const query = {
                'autherBy.email': email,
            };

            const cursorCards = cardsCollection.find(query);
            const cardItemInfo = await cursorCards.toArray();

            await Promise.all(
                cardItemInfo?.map(async (element) => {
                    const cardItemQuery = {
                        _id: new ObjectId(element?.productId),
                    };

                    const options = {
                        projection: {
                            itemName: 1,
                            itemImage: 1,
                            itemPrice: 1,
                        },
                    };

                    const cardItemResult = await itemsCollection.findOne(
                        cardItemQuery,
                        options
                    );
                    return {
                        cardItemResult,
                        itemQuantity: element?.itemQuantity,
                        _id: element._id,
                    };
                })
            ).then((value) => {
                response.json(value);
            });
        });

        // get single item
        app.get('/food-items/:id', async (request, response) => {
            const id = request.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await itemsCollection.findOne(query);

            response.send(result);
        });

        // add  item
        app.post('/item', async (request, response) => {
            const item = request.body;
            console.log('Item Uploaded');
            const result = await itemsCollection.insertOne(item);
            response.send(result);
        });

        // add  item
        app.post('/card', async (request, response) => {
            const item = request.body;
            console.log('Item Add to Card');
            const result = await cardsCollection.insertOne(item);
            response.send(result);
        });

        //jwt related api
        app.post('/jwt', async (request, response) => {
            const user = request.body;

            const token = jwt.sign(user, secret, { expiresIn: '30d' });

            response
                .cookie('access-token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none',
                })
                .send({ success: true });
        });

        // cookie remove
        app.post('/logout', (request, response) => {
            // Clear the 'access-token' cookie
            response.cookie('access-token', '', {
                expires: new Date(0),
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            });

            response.send({ success: true });
        });

        // item Quantity update
        app.put('/quantity/:id', async (request, response) => {
            const id = request.params.id;
            const updateQuantity = request.body;

            const filter = { _id: new ObjectId(id) };
            const updateDocument = {
                $set: updateQuantity,
            };

            const result = await itemsCollection.updateOne(
                filter,
                updateDocument
            );

            response.send(result);
        });

        // item Quantity update
        app.put(
            '/card-quantity/:id',
            verifyToken,
            async (request, response) => {
                const id = request.params.id;
                const updateQuantity = request.body;

                const filter = { _id: new ObjectId(id) };
                const updateDocument = {
                    $set: updateQuantity,
                };

                const result = await cardsCollection.updateOne(
                    filter,
                    updateDocument
                );

                response.send(result);
            }
        );
        //item update
        app.put('/item/:id', verifyToken, async (request, response) => {
            const id = request.params.id;
            const updatedItem = request.body;

            const filter = { _id: new ObjectId(id) };
            const updateDocument = {
                $set: updatedItem,
            };

            const result = await itemsCollection.updateOne(
                filter,
                updateDocument
            );

            response.send(result);
            console.log('update successful');
        });

        // remove card Item
        app.delete('/card-item-remove/:id', async (request, response) => {
            const id = request.params.id;
            const query = {
                _id: new ObjectId(id),
            };

            const result = await cardsCollection.deleteOne(query);
            response.send(result);
            console.log('Card Item remove');
        });
    } finally {
    }
}
run().catch(console.dir);
