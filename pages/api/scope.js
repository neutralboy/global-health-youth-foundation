import { MainScopes } from "./MainScopes";

export default function Scope(slug) {
    const result = MainScopes.filter(i => i.slug === slug );
    return result[0];
};