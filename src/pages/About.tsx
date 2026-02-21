import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hexagon } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="page-wrapper" style={{ paddingBottom: 'var(--space-24)' }}>
            {/* Header */}
            <section className="section-padding text-center">
                <div className="container">
                    <h1 className="fade-in-up">
                        We Make AI Work <span className="text-gradient">for Real Businesses</span>
                    </h1>
                    <p className="subheadline mx-auto fade-in-up delay-1">
                        Most AI agencies talk about tools. We talk about outcomes.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container">
                <div className="glass-panel text-left" style={{ padding: 'var(--space-8)', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>

                        {/* Image Side */}
                        <div style={{ flex: '1 1 300px', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                                alt="Founders examining growth systems"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(102,51,238,0.2), transparent)', mixBlendMode: 'overlay' }}></div>
                        </div>

                        {/* Text Content */}
                        <div style={{ flex: '1 1 400px', fontSize: 'var(--text-lg)', lineHeight: 1.8 }}>
                            <div style={{ display: 'flex', marginBottom: 'var(--space-6)' }}>
                                <div style={{ padding: '16px', background: 'rgba(102, 51, 238, 0.1)', borderRadius: '20px', border: '1px solid rgba(102, 51, 238, 0.3)' }}>
                                    <Hexagon size={32} className="text-primary" />
                                </div>
                            </div>

                            <p style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
                                We come from brand strategy, growth systems, and operational design — which means we understand how businesses actually function before we ever touch a workflow.
                                <strong style={{ color: 'var(--color-text)', display: 'block', marginTop: '1rem' }}> We're not here to install technology for technology's sake. We're here to reduce friction, cut waste, and give your business leverage.</strong>
                            </p>

                            <p style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-muted)' }}>
                                What we do is translate the capability of modern AI into practical, usable systems your team can operate with confidence. No jargon. No complexity. Just results.
                            </p>

                            <p style={{ color: 'var(--color-text-muted)' }}>
                                We work with founders, operators, and growth teams who are serious about building efficient businesses — not just experimenting with AI.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-8)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--color-primary-light)', fontSize: 'var(--text-2xl)' }}>
                            "We don't sell AI. We install the infrastructure that makes your business run better."
                        </h3>
                    </div>
                </div>
            </section>

            <div className="text-center mt-16 fade-in-up delay-2">
                <Link to="/book-call" className="btn btn-primary btn-lg">
                    Get Your Free Efficiency Audit <ArrowRight size={18} />
                </Link>
            </div>

        </div>
    );
};

export default About;
