import {
    filter,
    homepage,
    newJoke,
    random,
    putJoke,
    specifiJoke,
    deleteJokeById
} from "../controllers/controller.js"






export const route = (app) => {
    try {

        /** GET Methods */
        /**
         * @openapi
         * '/jokeapi/':
         *  get:
         *     tags:
         *     - Homepage Controller
         *     summary: Display the homepage
         *     responses:
         *      200:
         *        description: Fetched Successfully
         *      400:
         *        description: Bad Request
         *      404:
         *        description: Not Found
         *      500:
         *        description: Server Error
         */
        app.get("/jokeapi/", homepage)

        /** POST Methods */
        /**
         * @openapi
         * '/jokeapi/random':
         *  post:
         *     tags:
         *     - Random Controller
         *     summary: Get a random Joke
         *     requestBody:
         *      required: false
         *      content:
         *        application/json:
         *     responses:
         *      200:
         *        description: Created
         *      409:
         *        description: Conflict
         *      404:
         *        description: Not Found
         *      500:
         *        description: Server Error
         */
        app.post("/jokeapi/random", random)

        /** POST Methods */
        /**
        * @openapi
        * '/jokeapi/jokes':
        *   post:
        *     tags:
        *       - specificJoke Controller
        *     summary: Get a specific joke by Id
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               id:
        *                 type: integer
        *                 example: 50
        *     responses:
        *       200:
        *         description: Joke found
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               properties:
        *                 id:
        *                   type: integer
        *                   example: "50"
        *                 jokeText:
        *                         type: string
        *                         example: "What do you get when you cross a snowman and a vampire? Frostbite!"
        *                 jokeType:
        *                         type: string
        *                         example: "Wordplay"
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.post("/jokeapi/jokes", specifiJoke)

        /** POST Methods */
        /**
        * @openapi
        * '/jokeapi/filter':
        *   post:
        *     tags:
        *       - filter Controller
        *     summary: Filter a joke by, Science Wordplay Puns Foods Sports
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               type:
        *                 type: string
        *                 example: Science
        *     responses:
        *       200:
        *         description: Joke found by filter
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               properties:
        *                 id:
        *                   type: integer
        *                   example: "58"
        *                 jokeText:
        *                         type: string
        *                         example: "How do you organize a space party? You planet!"
        *                 jokeType:
        *                         type: string
        *                         example: "Science"
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.post("/jokeapi/filter", filter)

        /** POST Methods */
        /**
        * @openapi
        * '/jokeapi/newJoke':
        *   post:
        *     tags:
        *       - newJoke Controller
        *     summary: Create a new Joke without the need for an ID
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               type:
        *                 type: string
        *                 example: Joker
        *               textx:
        *                  type: string
        *                  example: Never stop learning cuz life never stop teaching
        *     responses:
        *       200:
        *         description: Joke created
        *         content:
        *           application/json:
        *             schema:
        *               type: string
        *               example: "Joke has been created"
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.post("/jokeapi/newJoke", newJoke)

        /** POST Methods */
        /**
        * @openapi
        * '/jokeapi/putJoke':
        *   post:
        *     tags:
        *       - putJoke Controller
        *     summary: Edit an existing Joke with an Id
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               id:
        *                type: integer
        *                example: 100
        *               type:
        *                 type: string
        *                 example: Orochimaru
        *               textx:
        *                   type: string
        *                   example: Real power is forged from the desire smoldering in the heart
        *     responses:
        *       200:
        *         description: Joke edited
        *         content:
        *           application/json:
        *             schema:
        *               type: object
        *               properties:
        *                 id:
        *                   type: integer
        *                   example: "100"
        *                 jokeText:
        *                         type: string
        *                         example: "Real power is forged from the desire smoldering in the heart"
        *                 jokeType:
        *                         type: string
        *                         example: "Orochimaru"
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.post("/jokeapi/putJoke", putJoke)

        /** POST Methods */
        /**
        * @openapi
        * '/jokeapi/deleteJoke':
        *   post:
        *     tags:
        *       - deleteJoke Controller
        *     summary: Delete an existing Joke with an Id
        *     requestBody:
        *       required: true
        *       content:
        *         application/json:
        *           schema:
        *             type: object
        *             properties:
        *               id:
        *                type: integer
        *                example: 100
        *     responses:
        *       200:
        *         description: Joke deleted
        *         content:
        *           application/json:
        *             schema:
        *               type: string
        *               example: "Joke has been deleted by Id 5"
        *       404:
        *         description: Not Found
        *       409:
        *         description: Conflict
        *       500:
        *         description: Server Error
        */
        app.post("/jokeapi/deleteJoke", deleteJokeById)
    } catch (error) {
        console.error(error.message);
    }
}