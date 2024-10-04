import React, { useEffect, useState } from 'react';
import styles from './Greeting.module.css'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';

// Function to get feedback based on score (with emojis)
const getFeedback = (score) => {
    if (score === 1) return { text: "Excellent", emoji: "🎉" };
    if (score === 2) return { text: "Great", emoji: "👏" };
    if (score === 3) return { text: "Good", emoji: "👍" };
    if (score === 4) return { text: "Fair", emoji: "🙂" };
    if (score === 5) return { text: "Keep Trying", emoji: "🙌" };
    if (score === 6) return { text: "Needs Improvement", emoji: "🤔" };
    return { text: "Better Luck Next Time", emoji: "😔" };
};

// GreetingCard Component
const GreetingCard = () => {
    const [user, setUser] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    // Load user and score from localStorage when the component mounts
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedScore = localStorage.getItem('score');
        
        if (storedUser) {
            setUser(storedUser);
        }
        if (storedScore) {
            setScore(parseInt(storedScore)); 
        }
    }, []);

    const feedback = getFeedback(score);


    useEffect(() => {
        if (score === 7) {
            toast.error(`${feedback.text} ${feedback.emoji}. Redirecting to home...`, {
                autoClose: 3000, 
            });
            setTimeout(() => {
                navigate('/'); 
            }, 3000);
        } else if (score < 7 && score > 0) {
            toast.success(`Congratulations ${user}! Your rating: ${feedback.text} ${feedback.emoji}`, {
                autoClose: 3000, 
            });
        }
    }, [score, navigate, user, feedback]);

    return (
        <div className={styles.greetingPage} >
            <div className={styles.card} >
                <div className={styles.cardbody}>
                    <h3 className={styles.cardtitle}>Congratulations {user}!</h3>
                    <p className={styles.cardtext}>
                        {score < 7 ? (
                            <>
                                You guessed the movie in {score} attempt(s).
                                <br />
                                <strong>Your rating: {feedback.text} {feedback.emoji}</strong>
                            </>
                        ) : (
                            <>
                                Oops! You didn’t guess in time.
                                <br />
                                <strong>{feedback.text} {feedback.emoji}</strong>
                                <br />
                                Redirecting to home...
                            </>
                        )}
                    </p>
                    {score < 7 && (
                      
                        <Button  name={"Play Again"} />
                        
                    )}
                </div>
            </div>
            <ToastContainer /> 
        </div>
    );
};

export default GreetingCard;


