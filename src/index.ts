import { AppDataSource } from "./data-source"
import { app, PORT } from "./server";

AppDataSource.initialize()
    .then(async () => {
        console.log('Database Connected');

        app.listen(PORT, ()=> {
            console.log(`Server running at ${PORT}`)
        })
    })
    .catch(error => console.log(error))

