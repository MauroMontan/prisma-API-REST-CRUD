import dotenv from "dotenv";

dotenv.config();

class Config {
    static PORT = process.env.PORT;
}

export default Config;
