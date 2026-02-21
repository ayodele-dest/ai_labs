import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Zap, Code2, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowItWorks.css';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.timeline-step').forEach((step: any, i) => {
                gsap.from(step, {
                    scrollTrigger: {
                        trigger: step,
                        start: 'top 85%',
                    },
                    x: i % 2 === 0 ? -50 : 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });

            gsap.from('.timeline-line', {
                scrollTrigger: {
                    trigger: '.timeline-container',
                    start: 'top 70%',
                    end: 'bottom 50%',
                    scrub: 1
                },
                scaleY: 0,
                transformOrigin: 'top center',
                ease: 'none'
            });
        }, stepsRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="page-wrapper">

            {/* Header */}
            <section className="section-padding text-center">
                <div className="container">
                    <h1 className="fade-in-up">
                        From Audit to <span className="text-gradient">Running System in 4 Steps</span>
                    </h1>
                    <p className="subheadline mx-auto fade-in-up delay-1">
                        We keep it simple because complex implementation shouldn't mean a complicated experience.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding" ref={stepsRef}>
                <div className="container">
                    <div className="timeline-container">
                        <div className="timeline-line"></div>

                        {/* Step 1 */}
                        <div className="timeline-step left">
                            <div className="timeline-node">1</div>
                            <div className="timeline-content glass-panel">
                                <div className="step-icon">
                                    <Search size={24} className="text-primary" />
                                </div>
                                <h2>The Audit</h2>
                                <p>
                                    We start by understanding how your business actually runs: where time is lost, where leads fall through, where your team is doing work that could be systemized. No assumptions, no off-the-shelf solutions.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="timeline-step right">
                            <div className="timeline-node">2</div>
                            <div className="timeline-content glass-panel">
                                <div className="step-icon">
                                    <Zap size={24} className="text-primary" />
                                </div>
                                <h2>System Design</h2>
                                <p>
                                    We map out a custom AI workflow designed around your tools, your team, and your goals. You see exactly what we're building and why before anything gets built.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="timeline-step left">
                            <div className="timeline-node">3</div>
                            <div className="timeline-content glass-panel">
                                <div className="step-icon">
                                    <Code2 size={24} className="text-primary" />
                                </div>
                                <h2>Build & Integrate</h2>
                                <p>
                                    We implement and integrate everything into your existing stack — no ripping and replacing. The system fits into how you already work, just better.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="timeline-step right">
                            <div className="timeline-node">4</div>
                            <div className="timeline-content glass-panel">
                                <div className="step-icon">
                                    <Rocket size={24} className="text-primary" />
                                </div>
                                <h2>Handover & Training</h2>
                                <p>
                                    We train your team, document everything, and make sure you're confident operating the system without us. Then we stay available for optimization as you grow.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-16 fade-in-up delay-2">
                        <h3 className="mb-6">You walk away with systems that work while you sleep.</h3>
                        <Link to="/book-call" className="btn btn-primary btn-lg">
                            Start with a Free Audit <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowItWorks;
