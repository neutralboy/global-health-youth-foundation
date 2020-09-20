import Link from 'next/link';

const Footer = () => (
    <footer className="footer has-background-light">
        <div className="columns is-vcentered">
            <div className="column is-one-third-desktop is-full-mobile has-text-centered">
                <span className="icon is-large">
                    <img src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_50/v1598529986/ghyf/KOSHA_-GHYF.png" alt="logo" />
                </span>
                <h2 className="is-size-3 has-text-primary">Global Health Youth Foundation</h2><br/>
                <p>
                    Global Health Youth Foundation is a non-partisan, non- profit, youth run Think Tank to empower Youth to work as future Global Health Leaders
                </p>
            </div>
            <div className="column is-two-thirds-desktop is-full-mobile">
                <div className="columns">
                    <div className="column is-half-desktop is-full-mobile has-text-centered">
                        <ul>
                            <li className="is-size-5"><Link href="/scope/cbcr"><a>Health Education Internship</a></Link></li>
                            <li className="is-size-5"><Link href="/scope/dgh"><a>Decolonizing Global Health</a></Link></li>
                            <li className="is-size-5"><Link href="/scope/youth-action"><a>Youth Action in Covid 19</a></Link></li>
                            <li className="is-size-5"><Link href="/team" ><a>Team</a></Link></li>
                            <li className="is-size-5"><Link href="/join-us"><a>Join Us</a></Link></li>
                        </ul>
                    </div>
                    <div className="column is-half-desktop is-full-mobile has-text-centered">
                        <a className="is-size-3" href="mailto::ceo@ghyf.org">ceo@ghyf.org</a>
                        <br/><br/>
                        <div>
                            <ul>
                                <li>
                                    <a>
                                        <span className="icon is-medium"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="icon is-medium"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="icon is-medium"><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/neutralboy/global-health-youth-foundation">
                                        <span className="icon is-medium"><img src="https://img.icons8.com/metro/50/000000/github.png"/></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="has-text-centered family-secondary">
            © Global Health Youth Foundation is a registered charity
        </div>
    </footer>
)


export default Footer;