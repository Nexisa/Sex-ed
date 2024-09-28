// import React from 'react'
import image from '../assets/untitled-design-5-1@2x.png'

const ReproductiveBody = () => {
  return (
    <div className="font-abhaya space-y-7">
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                What is Reproductive Health?
            </h1>
            <p>Reproductive health refers to the state of physical, mental, and social well-being in all matters related to the reproductive system. It involves having the knowledge, ability, and resources to make informed decisions about your body, relationships, and any sexual activities.
For teens, reproductive health means understanding how your body changes during puberty, how to take care of yourself, and how to engage in healthy, respectful relationships.</p>     
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Safe Practices and the Importance of Sexual Health
            </h1>
            <div className="space-y-3">
                <p>Sexual health is about making choices that protect you from infections, unplanned pregnancies, and emotional harm. Whether you're thinking about dating, relationships, or just trying to learn more, it’s important to practice safety and self-respect. Here are some key elements to consider:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Communication: Always communicate clearly and respectfully with your partner. Consent is a fundamental part of any relationship, meaning both people agree willingly and enthusiastically to participate in any activity.</li>
                    <li>Hygiene: Keeping your body clean is a crucial part of reproductive health. Regular bathing, changing undergarments, and maintaining genital hygiene are simple yet important habits that keep you healthy.</li>
                </ul>
                <p>Regular Check-ups: Going for regular health check-ups helps ensure that everything is going well. If you ever feel unsure about something, whether it’s about your health or your body’s changes, it’s always okay to ask a trusted adult or a healthcare professional.</p>
            </div>
        </div>
        <div className='w-11/12 md:w-7/12 mx-auto'>
            <img src={image} alt="image" className="w-full md:h-96 rounded-xl"/>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Overview of Contraception
            </h1>
            <div className="space-y-3">
                <p>Contraception is a method used to prevent pregnancy. For teens, it’s important to have age-appropriate knowledge about the different options available to make informed decisions in the future.</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Barrier Methods: Barrier methods, such as condoms, are used to block sperm from reaching an egg. They are a common form of contraception and have the added benefit of protecting against sexually transmitted infections (STIs).</li>
                    <li>Birth Control Pills: Birth control pills are hormonal contraceptives that prevent ovulation. They require a prescription and need to be taken daily to be effective.</li>
                </ul>
                <p>Emergency Contraception: Emergency contraception, also known as the "morning-after pill," is used after unprotected sex to prevent pregnancy. It should not be used as a regular form of contraception.</p>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Protecting Yourself Emotionally
            </h1>
            <div className="space-y-3">
                <p>Just as important as protecting yourself physically, emotional protection is key to maintaining healthy relationships. Understanding boundaries, mutual respect, and open communication are essential for protecting your emotional well-being</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Know Your Boundaries: Everyone has personal boundaries. It’s important to know your limits and express them clearly. Never feel pressured to do something you’re not comfortable with.</li>
                    <li>Respect for Yourself and Others: Respect is about treating yourself and others with kindness, understanding, and care. A healthy relationship is built on mutual trust and respect, where both partners feel safe and valued.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ReproductiveBody