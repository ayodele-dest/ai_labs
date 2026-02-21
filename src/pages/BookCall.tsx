import React, { useState } from 'react';
import './BookCall.css';
import { Send, CheckCircle2 } from 'lucide-react';

const BookCall: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="page-wrapper">
            <section className="section-padding text-center">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 className="fade-in-up">Let's Find Where You're <span className="text-gradient">Losing Time and Money</span></h1>
                    <p className="subheadline mx-auto fade-in-up delay-1">
                        Fill in a few quick details and we'll come to the call with a clear picture of where automation can have the biggest impact for your business.
                    </p>
                </div>
            </section>

            <section className="container" style={{ maxWidth: '600px', marginBottom: 'var(--space-24)' }}>
                <div className="glass-panel form-container fade-in-up delay-2">
                    {isSubmitted ? (
                        <div className="success-state">
                            <div className="success-icon">
                                <CheckCircle2 size={64} className="text-primary" />
                            </div>
                            <h2>Done.</h2>
                            <p>You'll hear from us within one business day.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="audit-form">
                            <div className="form-group">
                                <label>What type of business do you run?</label>
                                <input type="text" placeholder="e.g. Agency, E-commerce, SaaS" required className="form-input" />
                            </div>

                            <div className="form-group">
                                <label>What's your current team size?</label>
                                <select required className="form-input">
                                    <option value="" disabled selected>Select side...</option>
                                    <option value="1-5">1 - 5 employees</option>
                                    <option value="6-20">6 - 20 employees</option>
                                    <option value="21-50">21 - 50 employees</option>
                                    <option value="51+">51+ employees</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>What's your biggest operational challenge right now?</label>
                                <textarea rows={3} placeholder="Tell us where it hurts..." required className="form-input"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Which tools are you currently using? (CRM, email, etc.)</label>
                                <input type="text" placeholder="e.g. HubSpot, Slack, Mailchimp" required className="form-input" />
                            </div>

                            <div className="form-group">
                                <label>What's your approximate monthly revenue? (Optional)</label>
                                <select className="form-input">
                                    <option value="" disabled selected>Select revenue tier...</option>
                                    <option value="<10k">&lt; $10k / mo</option>
                                    <option value="10k-50k">$10k - $50k / mo</option>
                                    <option value="50k-100k">$50k - $100k / mo</option>
                                    <option value="100k+">$100k+ / mo</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>What outcome matters most to you?</label>
                                <div className="radio-group" style={{ display: 'grid', gap: '10px' }}>
                                    <label className="radio-label">
                                        <input type="radio" name="outcome" value="Save time" required /> Save time
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="outcome" value="Reduce costs" /> Reduce costs
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="outcome" value="Capture more leads" /> Capture more leads
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="outcome" value="All of the above" /> All of the above
                                    </label>
                                </div>
                            </div>

                            <div className="form-actions mt-8">
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
                                    Book My Free Audit <Send size={18} />
                                </button>
                                <p className="text-center mt-4 text-sm" style={{ color: 'var(--color-text-subtle)' }}>
                                    30 minutes. No hard sell. Just an honest look at what's possible.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BookCall;
