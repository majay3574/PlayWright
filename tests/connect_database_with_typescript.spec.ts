import mysql from 'mysql2/promise';


export default class DB {
    private DBConfig: mysql.ConnectionOptions = {
        host: "",
        user: "",
        database: "",
        password: "",
        port: 1111,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };
    //"universal_profile"
    async executeQuery(query: string): Promise<any[]> {
        const connection = await mysql.createConnection(this.DBConfig);
        try {
            const [rows] = await connection.execute(query) as [any[], any];
            return rows;
        } catch (error) {
            console.error("Error in connection/executing query:", error);
            throw error;
        } finally {
            await connection.end().catch((error) => {
                console.error("Error ending connection:", error);
            });
        }
    }
}