const musicDesc = {
    Ascend : "This meditation session is perfect for those who have difficulty meditating. Featuring a powerful combination of Theta, Alpha and Delta, this track will guide you into the extraordinary meditation state known as ‘Body Asleep-Mind Awake’.",
    Bliss : "This track uses Theta waves and music to increase charisma and reduce your fears and inhibitions. Expect to feel immense love and sensuality.",
    Confidence : "This track features Theta waves with the relaxing sounds of the ocean and subliminal affirmations designed to increase confidence and remove self doubt. Best used when you are feeling uncertain.",
    Aspire : "This guided meditation uses Theta and Delta waves to help you explore your heart’s deepest desires and imagine them being fulfilled. Best used when you need clarity of intention around your desires and the aspiration to fulfill",
    Clarity : "This guided meditation uses Theta and spoken meditation to encourage you to look into your heart to discover the purest, deepest intentions for your life. Theta waves erase thoughts of lack or limitation.",
    Perform : "Use this session that combines Beta and Gamma waves to boost self-confidence and unleash a powerful energy that will help you achieve any goal you set for yourself. Best used before an important meeting or presentation.",
    Manifest : "This guided track is about the law of attraction and the connectedness of our Universe, giving you a renewed sense of peace and guidance. Best used when starting a journey or setting your intentions. Uses Theta and Delta waves.This track contains dogma-free spiritual references.",
    Love : "This guided track uses Theta states to improve clarity, increase charisma, and make you more available for love and connections. Best used when you desire affection for yourself and others.",
    Reclaim : "This guided track is the perfect sequel for those who enjoy Manifest. This session delivers the same powerful messages about the law of attraction but from a second person perspective. Best used when resetting your intentions. Uses Theta and Delta waves. This track contains dogma-free spiritual references.",
    Prosper : "This track uses Theta waves set to the sound of ocean waves to reprogram your mind for more prosperity. You will begin to cultivate a more prosperous attitude towards wealth.",
    Motivate : "This track features the calming sound of ocean waves. Theta waves heighten your receptivity to help improve procrastination habits. You will experience increased flow of energy and motivation to be productive.",
    Create : "This track helps you unlock your imagination with the use of Alpha waves. You will experience improved cognitive functioning a boost of creativity. Best used when you need to feel inspired.",
    Focus : "This powerful track uses Beta, Gamma, and Theta states to help increase energy and mental acuity. Best used to power through your day, mentally prepare for a workout, or get in the zone.",
    Succeed : "This inspiring track improves your mood and selfesteem. Theta states initiate ‘big picture’ thinking and can help to overcome obstacles. Best used before a meeting or throughout your workday.",
    Overcome : "This session is perfect for those struggling with addictions or unhealthy habits. Theta states increase energy and metabolism, and can help eliminate self-sabotage. Best used when you must triumph or prevail.",
    Fit : "This guided track uses Theta, which is associated with heightened receptivity and is the ideal state to reprogram your mind with positive thoughts that assist in changing behaviors. Best used when you are trying to live a healthier lifestyle.",
    Heal : "This guided track uses Delta to release HGH, which helps to accelerate healing, boost your immune system, and support well-being. Best used when you feel misaligned or have ailments.",
    Recharge : "This invigorating track uses Beta, Gamma, and Theta to massage your mind, promote creativity, and relieve tension. Best used as a midday pick-me-up, or at the end of a hard day.",
    Relax : "This replenishing track can be used every day to calm your mind and relieve stress. Alpha promotes clarity and restoration. Best used whenever you need a time out.",
    Snooze : "This track uses Delta, which is the brain state of deep sleep to help guide you into a restful state. Beta waves will gradually wake you up. These naps provide a fresh burst of energy and help eliminate the need for caffeine during the work day."
}

export const getMusicDescription = (type) => {
    if(type in musicDesc){
        return musicDesc[type]
    }else{
        return musicDesc["Clarity"]
    }
}

