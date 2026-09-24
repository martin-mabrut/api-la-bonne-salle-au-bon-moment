import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API La Bonne Salle au Bon Moment",
            version: "1.0.0",
            description: "Documentation Swagger d'une API EXPRESS",
        },
        servers: [
            { url: "http://localhost:3000" },
        ],
    },
    apis: ["./routes/*.ts"],
}

export const swaggerSpec = swaggerJSDoc(options);