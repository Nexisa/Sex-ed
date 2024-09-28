// import React from 'react'
import image from '../assets/image-2@2x.png'

const SafetyBody = () => {
  return (
    <div className="font-abhaya space-y-7">
        <h1 className="font-extrabold text-[#FC1E00] text-xl ">
            Understanding Online Safety
        </h1>
        <div className='flex gap-7 flex-col-reverse md:flex-row'>
            <div className="space-y-5">
                <div className="space-y-3">
                    <p>Online safety refers to practices that help protect your personal information and privacy while you interact on the internet. With more teens using social media, chat platforms, and various websites, understanding how to stay safe online is crucial. Here’s how you can protect yourself:</p>
                    <ul className="list-disc w-11/12 mx-auto">
                        <li>Protect Your Personal Information: Never share sensitive information like your home address, phone number, school details, or passwords online. Even seemingly harmless details, when shared repeatedly, can expose your identity or location.</li>
                        <li>Use Strong Passwords: Make sure to use strong, unique passwords for your online accounts, and avoid using the same password for multiple sites. Regularly update your passwords and never share them with others, even friends.</li>
                        <li>Privacy Settings: Familiarize yourself with the privacy settings on social media platforms and websites you use. Keep your profiles private, so only people you know and trust can see your personal information and posts.</li>
                        <li>Beware of Scams and Phishing: Be cautious of suspicious messages, emails, or websites asking for your personal information. Scammers often pose as trustworthy sources to steal your data. If something feels off, trust your instincts and avoid clicking on unknown links</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-end justify-center'>
                <img src={image} alt="image" />
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Recognizing Inappropriate Content and Behavior
            </h1>
            <div className="space-y-3">
                <p>As you navigate the internet, you may encounter content or behaviour that feels uncomfortable or inappropriate. Here’s how to recognize and handle such situations:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Inappropriate Content: This includes content that is violent, sexual, or hateful in nature. If you come across something that makes you uncomfortable or seems inappropriate, it’s important to report it to a trusted adult or the platform’s moderators.</li>
                    <li>Cyberbullying: Cyberbullying involves harassing or bullying someone online through hurtful messages, comments, or posts. If you are a victim of cyberbullying, do not engage with the bully. Block the person and report the behaviour to a trusted adult or the platform where the harassment occurred.</li>
                    <li>Predatory Behavior: Online predators may try to manipulate or pressure teens into uncomfortable situations. Be cautious if someone you meet online asks overly personal questions, pressures you for photos, or tries to meet in person. Always talk to a trusted adult if you feel unsure about an online interaction.</li>
                    <li>Unwanted Contact: Sometimes people may try to contact you repeatedly, even if you don’t want to interact with them. If someone is messaging you without your consent or making you uncomfortable, block and report them.</li>
                </ul>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                How to Stay Safe in Online Communities
            </h1>
            <div className="space-y-3">
                <p>Engaging in online communities can be fun and rewarding, but it’s important to follow these tips to keep yourself safe:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Interact With People You Know: Only accept friend requests and interact with people you know in real life. If someone you don’t know tries to contact you, be cautious and don’t share personal details.</li>
                    <li>Avoid Meeting Online Strangers in Person: Never agree to meet someone in person that you only know online. If someone is pressuring you to meet up, it’s a red flag. Always let a trusted adult know if this happens.</li>
                </ul>
                <p>Think Before You Post: Remember that anything you post online can stay there forever, even if you delete it. Before posting pictures, comments, or videos, consider how they might affect your future or how others might interpret them.</p>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                What to Do if You Encounter Something Uncomfortable
            </h1>
            <div className="space-y-3">
                <p>It’s important to know the signs when someone is not respecting your boundaries:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Ignoring "No": If someone continues to push you into doing something after you’ve said no, this is a clear violation of your boundaries.</li>
                    <li>Manipulation or Guilt-Tripping: If someone tries to manipulate you into doing something or makes you feel guilty for setting boundaries, this is a form of emotional pressure.</li>
                </ul>
                <p>Disregard for Personal Space: Not respecting physical space or continuing physical contact when you’ve indicated discomfort is another form of boundary violation.</p>
            </div>
        </div>
        <div className="space-y-5">
            <h1 className="font-extrabold text-[#FC1E00] text-xl ">
                Why Consent and Boundaries Matter
            </h1>
            <div className="space-y-3">
                <p>It’s important to know what steps to take if you find yourself in a situation that makes you uncomfortable online:</p>
                <ul className="list-disc w-11/12 mx-auto">
                    <li>Stop the Interaction: If someone is making you feel uncomfortable or if you come across inappropriate content, immediately stop the interaction and avoid engaging further.</li>
                    <li>Report It: Most social media platforms, chat rooms, and websites have options for reporting inappropriate content or behavior. Use these tools to alert the platform to the issue.</li>
                    <li>Talk to a Trusted Adult: Whether it’s a parent, teacher, or counselor, make sure to inform a trusted adult about the situation. They can offer support and help you take the right steps to protect yourself.</li>
                    <li>Block the Person: If someone is persistently contacting you in a way that feels wrong or unwanted, block them on the platform. This will prevent further interaction.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SafetyBody