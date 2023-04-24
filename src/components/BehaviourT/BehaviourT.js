
import React from 'react'
import "../ClinicalT/ClinicalT.css"
import "../Home/Home.css"
//import { Link } from "react-router-dom"
import bt1 from "../Images/bt1.png"
import Navbar from "../Navbar/Navbar"
export default function Bther(){
    const s1= {textAlign:'center',fontSize:'20px'}
    const klm={
        paddingTop:"10rem",
    }
    return(
        <>
        <Navbar/>
            <section className="about" id="about">
                <h1 style={klm} className="hd">BEHAVIOURAL THERAPY</h1>
                <h2 style={s1}>Recognise the trouble behaviour and change it for good</h2><br /><br />
                <div className="row">
                    <div className="image">
                        <img src={bt1} alt=''/>
                    </div>
                    <div className="content">
                        <h3>Anger Management</h3>
                        <p>Anger is a powerful human emotion, and it is natural to feel it like any other emotion.
                            Anger is one of the most common human emotions and is as basic as happiness, disappointment, fear or disgust. At some point in life, we all feel frustrated.
                            However, when the extent or severity of anger interferes with relationships, work performance, mental well-being, it becomes problematic.
                            At that moment, we must move towards anger management therapy.</p>
                    </div>
                </div><br /><br />
                <div className="clmn">
                    <h1>What Causes Anger Issues?</h1><br />
                    <ul>
                        <li>Anger is a complex process that involves multiple factors such as stress, financial problems, abuse, and poor social or family situations.</li>
                        <li>When you actively avoid conflict and walk away without resolving an issue.</li>
                        <li>Individual differences in the interpretation of incoming information.</li>
                    </ul>
                    <h1>Symptoms Of Anger Issues?</h1><br />
                    <ul>
                        <li>Increased heart </li>
                        <li>Feeling hot (hyper)</li>
                        <li>Tightness in the chest</li>
                        <li>Clenching jaws or grinding </li>
                        <li>Tense muscles</li>
                        <li>Stomach-churning</li>
                        <li>Shaking or Trembling</li>
                    </ul><br /><br />
                    <h1>Treatment</h1><br />
                    <ul>
                        <li>Psychotherapy</li>
                        <li>Cognitive Behavioural Therapy (CBT)</li>
                        <li>Relaxation techniques</li>
                        <li>Counselling</li>
                        <li>Once you're calm, express your anger</li>
                        <li>Know when to seek help</li>
                        <li>Practice relaxation skills</li>
                        <li>Get some exercise</li>
                        <li>Don't hold a grudge</li>
                    </ul>
                </div>
            </section><hr size="10%" />
            <section className="about" id="about">
                <div className="row">
                    <div className="image">
                        <img src="https://familydoctor.org/wp-content/uploads/2001/10/shutterstock_268785908-e1483740956729.jpg" alt="stress" />
                    </div>
                    <div className="content">
                        <h3>Counselling for Stress</h3>
                        <p>Stress is a normal part of everyone’s life. It is a normal response to the body when changes occur. However, till an optimal level, it can be helpful and is called Eustress.
                            But over that can cause distress.People can experience stress around their environment, body, and thoughts.
                            Even positive life changes, such as a promotion, a mortgage, or the birth of a child can cause stress.</p>
                    </div>
                </div><br /><br />
                <div className="clmn">
                    <h1>What Causes Stress?</h1><br />
                    <ul>
                        <li>Experiencing a traumatic event or life-threatening situation often leads to stress.</li>
                        <li>Unsafe environments, crime-ridden towns, and other safety issues may result in chronic stress.</li>
                        <li>The diagnosis of a new disease, and the signs or complications of a new illness, leads to stress.</li>
                        <li>Financial difficulties are a common source of stress.</li>
                    </ul>
                    <h1>Symptoms Of Stress?</h1><br />
                    <ul>
                        <li>Irritability</li>
                        <li>Fatigue</li>
                        <li>Appetite changes</li>
                        <li>Sexual problems</li>
                        <li>Weight changes</li>
                        <li>Constipation</li>
                    </ul><br /><br /><br /><br />
                    <br></br>
                    <h1>Treatment</h1><br />
                    <ul>
                        <li>Psychologists often prescribe many lifestyles changes to individuals to know how to control their stress.</li>
                        <li>Medication may be appropriate in some cases as person progresses through his or her path.</li>
                        <li>Cognitive behavioral therapy to recognize negative thoughts and behaviors encountered by an individual.</li>
                        <li>Relaxation techniques may reduce stress</li>
                    </ul>
                </div>
            </section><hr size="10%" />
            <section className="about" id="about">
                <div className="row">
                    <div className="image">
                        <img src="https://www.indiancrestpeds.com/wp-content/uploads/2019/11/4-Common-Causes-of-Behavioral-Problems-in-Children.jpg" alt=''/>
                    </div>
                    <div className="content">
                        <h3>Counselling for Behavioural Disorder</h3>
                        <p>Behavioural Disorders are issues that are more than simple irrational behaviour. They are linked to mental health problems that lead to disruptive behaviour, emotional and social problems.
                            Attention Deficiency Disorder (ADD) is an example of a behavioural disorder.
                            People with behavioural problems normally require a range of clinical services, including medication, psychiatric therapy, rehabilitation, or other therapies.</p>
                    </div>
                </div><br /><br />
                <div className="clmn">
                    <h1>What Causes Behavioural Disorders?</h1><br />
                    <ul>
                        <li>Traumatic brain injury and psychological conditions that affect the brain may also cause behavioural symptoms.</li>
                        <li>Substance abuse is another possible cause of behavioural symptoms, or may be a result of behavioural symptoms.</li>
                        <li>Genetics may play a role, as certain disorders with behavioural symptoms are more common in people with a family history of mental illness or drug abuse.</li>
                    </ul>
                    <h1>Symptoms Of Behavioural Disorder?</h1><br />
                    <ul>
                        <li>Inability to control the impulse</li>
                        <li>Maladaptive behaviour</li>
                        <li>Aggressive behaviour</li>
                        <li>Social Unwantedness</li>
                        <li>Feels like driven by a motor</li>
                        <li>Feeling of anxiety</li>
                        <li>Difficulty with interpersonal relationships</li>
                    </ul><br /><br /><br />
                    <br></br>
                    <h1>Treatment</h1><br />
                    <ul>
                        <li>Cognitive behavioural therapy for positive thinking skills is critical for the treatment of behavioural disorders.
                        </li>
                        <li>A talk therapy called psychotherapy will help to improve with negativity.</li>
                        <li>Family therapy will help recover and heal the individual. It will help all family members create practical, positive changes as the individual progresses in recovery.</li>
                        <li>Relaxation techniques can reduce anxiety and stress in behavioural disorders.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}