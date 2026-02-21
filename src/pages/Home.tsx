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

                    <div className="hero-stagger hero-visual" style={{ position: 'relative' }}>
                        <div className="image-wrapper glass-panel" style={{ padding: '8px', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team collaborating on automation"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '12px', maxHeight: '420px', transition: 'transform 0.7s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', opacity: 0.6, borderRadius: '12px', pointerEvents: 'none' }}></div>
                        </div>

                        {/* Floating elements to add UI flair */}
                        <div className="glass-panel" style={{ position: 'absolute', bottom: '-24px', left: '-24px', display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 10, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ background: 'rgba(102, 51, 238, 0.2)', padding: '12px', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                <Zap size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', margin: 0 }}>Efficiency +300%</p>
                                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, marginTop: '4px' }}>Team capacity unlocked</p>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ position: 'absolute', top: '-24px', right: '-24px', display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 10, transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-8px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80', animation: 'pulse 2s infinite' }}></div>
                                <p style={{ fontSize: '12px', fontWeight: '500', color: 'var(--color-text-muted)', margin: 0 }}>System Active</p>
                            </div>
                            <p style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', margin: 0 }}>ROI Tracking</p>
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
                        <div className="what-if-emphasis glass-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                                    alt="Active team strategy meeting"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-surface-bg), transparent)' }}></div>
                            </div>
                            <div style={{ padding: '32px', paddingTop: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'white', fontWeight: '600' }}>That's not a future promise. That's what we install.</h3>
                                <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', margin: 0 }}>
                                    We're not here to sell you tools or teach you prompts. We design complete systems, integrate them into your existing workflow, and train your team to use them with confidence.
                                </p>
                            </div>
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
