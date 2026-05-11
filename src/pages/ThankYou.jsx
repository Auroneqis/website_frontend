import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, Home, Mail } from 'lucide-react';
import '../styleSheets/thankYou.css';

export function ThankYou() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="ty-wrapper">

            {/* ambient glow blobs */}
            <div className="ty-glow ty-glow--blue" aria-hidden="true" />
            <div className="ty-glow ty-glow--green" aria-hidden="true" />

            <div className="ty-card">

                {/* icon */}
                <div className="ty-icon-ring" aria-hidden="true">
                    <CheckCircle className="ty-check-icon" size={36} />
                </div>

                {/* heading */}
                <h1 className="ty-heading">
                    Thank You!
                </h1>
                <p className="ty-sub">
                    Your message has been received. We'll get back to you within&nbsp;
                    <strong>24 hours</strong>.
                </p>

                {/* what happens next */}
                <div className="ty-steps">
                    {[
                        { icon: Mail, text: 'Confirmation email on its way to your inbox.' },
                        { icon: CheckCircle, text: 'Our team reviews your inquiry within 1 business day.' },
                        { icon: ArrowRight, text: 'We schedule a call and build something great together.' },
                    ].map(({ icon: Ico, text }, i) => (
                        <div key={i} className="ty-step">
                            <div className="ty-step-num">{i + 1}</div>
                            <Ico className="ty-step-icon" size={16} aria-hidden="true" />
                            <p className="ty-step-text">{text}</p>
                        </div>
                    ))}
                </div>

                {/* countdown */}
                <div className="ty-countdown">
                    <div
                        className="ty-countdown-ring"
                        style={{ '--pct': `${(countdown / 5) * 100}%` }}
                        aria-label={`Redirecting in ${countdown} seconds`}
                    >
                        <span className="ty-countdown-num">{countdown}</span>
                    </div>
                    <p className="ty-countdown-label">
                        Redirecting to home in <strong>{countdown}s</strong>
                    </p>
                </div>

                {/* manual CTA */}
                <div className="ty-actions">
                    <button
                        className="ty-btn ty-btn--primary"
                        onClick={() => navigate('/')}
                    >
                        <Home size={16} aria-hidden="true" /> Go Home Now
                    </button>
                    <button
                        className="ty-btn ty-btn--outline"
                        onClick={() => navigate('/contact')}
                    >
                        Send Another Message
                    </button>
                </div>

            </div>
        </div>
    );
};