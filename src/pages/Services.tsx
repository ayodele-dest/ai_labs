import React from 'react';
import { ArrowRight, Bot, MessageSquare, Zap, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services: React.FC = () => {
    return (
        <div className="page-wrapper">

            {/* Header */}
            <section className="services-header section-padding text-center">
                <div className="container">
                    <h1 className="fade-in-up">
                        AI Systems for <span className="text-gradient-primary">Smarter Business Operations</span>
                    </h1>
                    <p className="subheadline mx-auto fade-in-up delay-1">
                        We design and install practical systems that reduce manual work, increase conversions, and free your team to do what only humans can.
                    </p>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="services-breakdown">
                <div className="container">

                    {/* Service 1 */}
                    <div className="service-detail-card glass-panel fade-in-up delay-2">
                        <div className="service-detail-header">
                            <div className="service-icon-box">
                                <Bot size={32} className="text-primary" />
                            </div>
                            <div>
                                <h2>Marketing That Runs Without Constant Supervision</h2>
                                <p className="service-tagline">Turn inconsistent marketing into a scalable content engine. Stay visible and convert more — without a full content team or constant effort.</p>
                            </div>
                        </div>

                        <div className="service-detail-body">
                            <div className="service-implement-list">
                                <h4>What we implement:</h4>
                                <ul className="feature-list">
                                    <li><CheckCircle2 size={16} className="text-primary" /> Marketing automation</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> AI content creation & scheduling</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Content repurposing workflows</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Ad creative production</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Lead creative testing pipelines</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Sales funnel optimization</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Personalized email & SMS sequences</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Campaign performance tracking</li>
                                </ul>
                            </div>
                            <div className="service-result-box">
                                <h4>The result:</h4>
                                <p>More visibility. Better conversion. Less manual effort.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="service-detail-card glass-panel fade-in-up delay-3">
                        <div className="service-detail-header">
                            <div className="service-icon-box">
                                <MessageSquare size={32} className="text-primary" />
                            </div>
                            <div>
                                <h2>Customer Response That Never Sleeps</h2>
                                <p className="service-tagline">Never miss another lead. Every lead that doesn't hear back fast goes somewhere else. We install automated systems that respond, qualify, and book — around the clock.</p>
                            </div>
                        </div>

                        <div className="service-detail-body">
                            <div className="service-implement-list">
                                <h4>What we implement:</h4>
                                <ul className="feature-list">
                                    <li><CheckCircle2 size={16} className="text-primary" /> Website chatbots</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> WhatsApp automation</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Instagram & social DM automation</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Lead qualification flows</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Automated appointment booking</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Customer service automation</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Post-purchase follow-up sequences</li>
                                </ul>
                            </div>
                            <div className="service-result-box">
                                <h4>The result:</h4>
                                <p>24/7 response without a single new hire.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="service-detail-card glass-panel fade-in-up delay-4">
                        <div className="service-detail-header">
                            <div className="service-icon-box">
                                <Zap size={32} className="text-primary" />
                            </div>
                            <div>
                                <h2>Operations That Don't Rely on Manual Work</h2>
                                <p className="service-tagline">Eliminate the admin that's draining your team. Your team is skilled and expensive. Stop them spending hours on work that should run itself.</p>
                            </div>
                        </div>

                        <div className="service-detail-body">
                            <div className="service-implement-list">
                                <h4>What we implement:</h4>
                                <ul className="feature-list">
                                    <li><CheckCircle2 size={16} className="text-primary" /> Client onboarding automation</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Invoice & payment workflows</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> CRM automations & pipeline management</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Email routing & auto-replies</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Internal task routing</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> File organization systems</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Sales automation workflows</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Reporting & data entry automation</li>
                                </ul>
                            </div>
                            <div className="service-result-box premium-result">
                                <h4>The result:</h4>
                                <p>Lower operational costs, fewer errors, faster execution.</p>
                                <div className="premium-badge">premium system build</div>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="service-detail-card glass-panel fade-in-up delay-5">
                        <div className="service-detail-header">
                            <div className="service-icon-box">
                                <BarChart3 size={32} className="text-primary" />
                            </div>
                            <div>
                                <h2>Insights Without the Spreadsheet Headache</h2>
                                <p className="service-tagline">Clear decisions. Faster. Stop guessing. Get automated visibility into what's working, what's not, and where to act next.</p>
                            </div>
                        </div>

                        <div className="service-detail-body">
                            <div className="service-implement-list">
                                <h4>What we implement:</h4>
                                <ul className="feature-list">
                                    <li><CheckCircle2 size={16} className="text-primary" /> AI-enhanced performance dashboards</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Automated reporting summaries</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Trend & anomaly alerts</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Hiring & candidate filtering systems</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> Staff AI enablement workshops</li>
                                    <li><CheckCircle2 size={16} className="text-primary" /> KPI tracking & forecasting tools</li>
                                </ul>
                            </div>
                            <div className="service-result-box">
                                <h4>The result:</h4>
                                <p>Smarter decisions. Less time in spreadsheets. A team ready for the future.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Pricing Packages */}
            <section className="pricing-section section-padding">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2>Structured Options. Clear Investment.</h2>
                    </div>

                    <div className="pricing-grid">
                        {/* Starter */}
                        <div className="pricing-card glass-panel">
                            <h3>Starter AI Setup</h3>
                            <p className="pricing-target">For small teams taking their first step.</p>
                            <p className="pricing-desc">
                                One core automation or AI marketing system, fully set up and integrated. Includes a team walkthrough so your people know exactly how to use it.
                            </p>
                            <div className="pricing-price">
                                <span className="price-label">Investment:</span>
                                <span className="price-value">From $1,000</span>
                            </div>
                        </div>

                        {/* Growth (Highlighted) */}
                        <div className="pricing-card glass-panel highlighted">
                            <div className="popular-badge">MOST POPULAR</div>
                            <h3>Growth AI System</h3>
                            <p className="pricing-target">For businesses ready to streamline across the board.</p>
                            <p className="pricing-desc">
                                Marketing automation + customer experience system + workflow automation, built as one connected infrastructure. Includes 30 days of support after launch.
                            </p>
                            <div className="pricing-price">
                                <span className="price-label">Investment:</span>
                                <span className="price-value">From $3,500</span>
                            </div>
                        </div>

                        {/* Full Transformation */}
                        <div className="pricing-card glass-panel">
                            <h3>Full AI Transformation</h3>
                            <p className="pricing-target">For scaling businesses that want complete infrastructure.</p>
                            <p className="pricing-desc">
                                Multi-department automation, reporting dashboards, funnel optimization, hiring systems, and a full team training workshop. Built around your business, not a template.
                            </p>
                            <div className="pricing-price">
                                <span className="price-label">Investment:</span>
                                <span className="price-value">Custom Scope</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/book-call" className="btn btn-primary btn-lg">
                            Book a Free Efficiency Audit <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
