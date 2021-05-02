import { MainScopes } from "./MainScopes";

export default (req, res) => {
    const { slug } = req.query;
    const result = MainScopes.filter(i => i.slug === slug );
    res.status = 200;
    res.json(result[0]);
};