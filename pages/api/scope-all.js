import  { MainScopes } from "./MainScopes";

export default (req, res) => {
    res.status = 200;
    res.json(MainScopes);
};