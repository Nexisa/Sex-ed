// import React from 'react'
import image from '../assets/untitled-design-3-1@2x.png'

const TouchBody = () => {
  return (
    <div className="font-abhaya space-y-7">
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                What is Consent?
            </h1>
            <div className="space-y-3">
                <p>Consent is an agreement between participants to engage in any activity together, whether it’s a conversation, a physical interaction, or a relationship. It is the foundation of respectful interactions, built on mutual understanding and willingness. Here's what you need to know about consent:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Clear and Voluntary: Consent should be given freely and clearly. It is not the result of pressure, manipulation, or intimidation.</li>
                    <li>Ongoing: Consent can be given and withdrawn at any time. It’s important to check in regularly, especially in changing situations.</li>
                    <li>Mutual: Both parties should agree enthusiastically to any interaction or activity.</li>
                    <li>Specific: Agreeing to one thing doesn’t mean agreeing to everything. For instance, if someone agrees to a hug, that doesn’t mean they are consenting to anything else.</li>
                </ul>
            </div>
        </div>
        <h1 className="font-extrabold text-[#FC1E00] text-xl ">
            Understanding Personal Boundaries
        </h1>
        <div className='flex flex-col-reverse md:flex-row gap-6'>
            <div className="space-y-5">
                <div className="space-y-3">
                    <p>Personal boundaries are the limits and rules people set for how others can behave around them. These boundaries help people define their comfort zones in different situations and relationships. Here’s why setting and respecting boundaries is so important:</p>
                    <ul className="list-disc w-11/12 mx-auto">
                        <li>Physical Boundaries: These refer to a person’s comfort with physical touch. Everyone has different preferences for physical space and touch, and it’s important to communicate what feels comfortable.</li>
                        <li>Emotional Boundaries: Emotional boundaries involve protecting your feelings and not allowing others to dismiss or invalidate your emotions. It’s okay to distance yourself from situations or people who make you feel unsafe or uncomfortable emotionally.</li>
                        <li>Time and Energy Boundaries: These involve how much time and energy you give to others. Knowing when to say "no" to requests or responsibilities when you're overwhelmed is a healthy way to set these boundaries.</li>
                    </ul>
                </div>
            </div>
            <div className='w-11/12 md:w-[40%]'>
                <img src={image} alt="image" className='w-full rounded-xl'/>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                How to Say “No” and Respect Others' Boundaries
            </h1>
            <div className="space-y-3">
                <p>Learning how to express your boundaries and respect those of others is key to fostering healthy, respectful interactions. Here are some tips:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Communicate Clearly: When you’re uncomfortable, it’s important to express your feelings clearly and confidently. You don’t owe an explanation, and a simple "no" is valid.</li>
                    <li>Practice Empathy: Respect others' boundaries the same way you want yours to be respected. Always ask for permission before engaging in physical or emotional activities that could impact someone else.</li>
                    <li>Look for Non-Verbal Cues: Sometimes, people might be uncomfortable expressing their boundaries verbally. Pay attention to body language and other non-verbal cues to ensure you’re not overstepping.</li>
                </ul>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Recognizing When Boundaries Are Being Violated
            </h1>
            <div className="space-y-3">
                <p>It’s important to know the signs when someone is not respecting your boundaries:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Ignoring "No": If someone continues to push you into doing something after you’ve said no, this is a clear violation of your boundaries.</li>
                    <li>Manipulation or Guilt-Tripping: If someone tries to manipulate you into doing something or makes you feel guilty for setting boundaries, this is a form of emotional pressure.</li>
                    <li>Disregard for Personal Space: Not respecting physical space or continuing physical contact when you’ve indicated discomfort is another form of boundary violation.</li>
                </ul>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Why Consent and Boundaries Matter
            </h1>
            <p>Respecting consent and boundaries helps to build trust, safety, and respect in relationships. It encourages open communication and ensures that everyone involved feels valued and comfortable. Whether in friendships, family, or romantic relationships, understanding and respecting these principles is essential for fostering positive, supportive interactions.</p>
        </div>
    </div>
  )
}

export default TouchBody