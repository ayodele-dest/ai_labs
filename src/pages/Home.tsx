import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Bot, Zap, BarChart3, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const whatIfRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLElement>(null);

    // Hero Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-stagger', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });

            // Real cost section
            gsap.utils.toArray('.real-cost-item').forEach((item: any, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: '.real-cost-grid',
                        start: 'top 80%',
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'power2.out'
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-home" ref={heroRef}>

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-stagger">
                            Scale <span className="text-gradient-primary">Smarter.</span><br />
                            Not Bigger.
                        </h1>
                        <p className="hero-stagger hero-subtitle">
                            Reduce Costs. Increase Capacity.
                        </p>
                        <p className="hero-stagger hero-body">
                            We design and install smart automation systems that reduce manual work,
                            capture more leads, and help your business grow without adding headcount.
                        </p>

                        <div className="hero-stagger cta-group">
                            <Link to="/book-call" className="btn btn-primary">
                                Get Your Free Efficiency Audit <ArrowRight size={18} />
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                See What We Build
                            </Link>
                        </div>
                        <p className="hero-stagger cta-subtext">
                            In 30 minutes, we'll show you exactly where your business is leaking time and money.
                        </p>
                    </div>

                    <div className="hero-stagger hero-visual">
                        <div className="glass-panel mockup-panel">
                            <div className="mockup-header">
                                <div className="dots"><span></span><span></span><span></span></div>
                                <div className="mockup-title">efficiency_agent.js</div>
                            </div>
                            <div className="mockup-body">
                                <div className="mockup-line"><span className="code-keyword">import</span> {'{'} Team {'}'} <span className="code-keyword">from</span> <span className="code-string">'@business/workforce'</span>;</div>
                                <div className="mockup-line"><span className="code-keyword">import</span> {'{'} AutomationSystem {'}'} <span className="code-keyword">from</span> <span className="code-string">'@bail/core'</span>;</div>
                                <div className="mockup-line"><br /></div>
                                <div className="mockup-line"><span className="code-comment">// Deploying 24/7 autonomous capability</span></div>
                                <div className="mockup-line"><span className="code-keyword">const</span> operations = <span className="code-keyword">new</span> AutomationSystem();</div>
                                <div className="mockup-line">operations.optimize(Team.workflows);</div>
                                <div className="mockup-line"><br /></div>
                                <div className="mockup-line"><span className="code-function">monitor</span>().then(status ={'>'} {'{'}</div>
                                <div className="mockup-line indented">console.<span className="code-function">log</span>(<span className="code-string">'Overhead reduced by 40%'</span>);</div>
                                <div className="mockup-line indented">console.<span className="code-function">log</span>(<span className="code-string">'Capacity increased by 300%'</span>);</div>
                                <div className="mockup-line">{'}'});</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 - THE REAL COST OF DOING NOTHING */}
            <section className="section-padding real-cost-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>You Don't Need More Staff.<br />You Need <span className="text-gradient">Smarter Systems.</span></h2>
                        <p className="subheadline mx-auto">
                            Growing businesses overspend on roles that shouldn't need to be roles — editors, admins, customer service reps, social managers — all hired to handle work that's entirely predictable.
                        </p>
                    </div>

                    <div className="real-cost-grid">
                        {[
                            "Formatting and scheduling content",
                            "Responding to the same customer questions",
                            "Booking appointments and sending follow-ups",
                            "Entering data and filing documents",
                            "Qualifying leads before a sales call"
                        ].map((item, i) => (
                            <div key={i} className="real-cost-item glass-panel">
                                <div className="icon-wrapper"><Clock size={24} className="text-accent" /></div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-lg text-primary-light font-medium">
                            You're paying human salaries for predictable workflows. There's a better way.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3 - WHAT BECOMES POSSIBLE */}
            <section className="section-padding" ref={whatIfRef}>
                <div className="container">
                    <div className="what-if-grid">
                        <div className="what-if-content">
                            <h2>What If Your<br />Business Could…</h2>
                            <ul className="feature-list">
                                <li><CheckCircle2 className="text-primary" /> Generate a month of content in a single afternoon</li>
                                <li><CheckCircle2 className="text-primary" /> Respond to every lead instantly — at 2am, on weekends, on holiday</li>
                                <li><CheckCircle2 className="text-primary" /> Onboard new clients without a single manual email</li>
                                <li><CheckCircle2 className="text-primary" /> Qualify leads before they ever reach your team</li>
                                <li><CheckCircle2 className="text-primary" /> Track performance without touching a spreadsheet</li>
                            </ul>
                        </div>
                        <div className="what-if-emphasis glass-panel">
                            <h3>That's not a future promise. That's what we install.</h3>
                            <p>
                                We're not here to sell you tools or teach you prompts. We design complete systems, integrate them into your existing workflow, and train your team to use them with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 - SERVICES OVERVIEW */}
            <section className="section-padding services-overview" ref={servicesRef}>
                <div className="container">
                    <h2 className="text-center mb-12">What We Build</h2>

                    <div className="services-grid">
                        <div className="service-card glass-panel">
                            <Bot size={32} className="text-primary mb-4" />
                            <h3>Marketing That Runs Without Constant Supervision</h3>
                            <p>Create content faster, launch campaigns without a full team, and convert more leads without rewriting everything from scratch.</p>
                        </div>

                        <div className="service-card glass-panel">
                            <Zap size={32} className="text-primary mb-4" />
                            <h3>Customer Response That Never Sleeps</h3>
                            <p>Capture, qualify, and follow up with leads automatically — across your website, WhatsApp, and Instagram — so nothing falls through the cracks.</p>
                        </div>

                        <div className="service-card glass-panel">
                            <Clock size={32} className="text-primary mb-4" />
                            <h3>Operations That Don't Rely on Manual Work</h3>
                            <p>Automate onboarding, invoicing, task routing, and internal admin so your team focuses on the work that actually moves the needle.</p>
                        </div>

                        <div className="service-card glass-panel">
                            <BarChart3 size={32} className="text-primary mb-4" />
                            <h3>Insights Without the Spreadsheet Headache</h3>
                            <p>Turn scattered data into clear summaries, performance snapshots, and decisions you can act on immediately.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/services" className="btn btn-secondary">
                            See All Services <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section-padding final-cta-section">
                <div className="container text-center">
                    <div className="final-cta-box glass-panel">
                        <h2>Your Business Has Room to Run Leaner. Let's Find It.</h2>
                        <p className="subheadline mx-auto">
                            Find out how much time and payroll your business could reclaim.
                        </p>
                        <div className="mt-8">
                            <Link to="/book-call" className="btn btn-primary btn-lg">
                                Get Your Free Efficiency Audit
                            </Link>
                            <p className="cta-subtext mt-4">30 minutes. No pressure. Real clarity on where to start.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
