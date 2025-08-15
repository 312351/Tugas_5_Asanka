import Section_Panjang from "./Component_section";

export default function Section_Pjg(){
    return(
        <div>
         <Section_Panjang 
        flex="row"
        Label="Change your voice. Become anyone." 
        Label2="Gaming, streaming, or just vibing with friends? We got you. 200+ Voicemod voices—from AI anime waifus to Battlefield-style radios."
        Button="Learcn more about Voice Changer" 
        imgSrc="https://www.voicemod.net/new/wp-content/uploads/2024/02/change-voice-real-time.png"
        Direct="https://www.voicemod.net/new/wp-content/uploads/2024/02/voicemod-soundboard.png"/>
        

         <Section_Panjang 
        flex="row-reverse"
        Label="Drop sound memes, dominate the chat." 
        Label2="A sound is worth a thousand pictures. Add hilarious effects to your group chat and streams—find your sound and make others know about it."
        Button="Learn more about Soundboard" 
        imgSrc="https://www.voicemod.net/new/wp-content/uploads/2024/02/voicemod-soundboard.png"
        Direct="https://www.voicemod.net/new/wp-content/uploads/2024/02/voicemod-soundboard.png"/>

         <Section_Panjang 
        flex="row"
        Label="Loot the Community for voices and sounds." 
        Label2="If a sound meme or voice filter exists, we have it. Stay on top of trends, pick your favorites, and add them to your soundboards. No uploads, no fuss."
        Button="Check it out!" 
        imgSrc="https://www.voicemod.net/new/wp-content/uploads/2024/02/community.png"
        Direct=""/>


         <Section_Panjang 
        flex="row-reverse"
        Label="Create your own soundboard with unlimited sounds" 
        Label2="Can’t find the voice you want? Make your own or tweak existing ones! Voicelab lets you mix effects from Reverb and Delay to wild ones like Robotifier."
        Button="Learn More about Voicelab" 
        imgSrc="https://www.voicemod.net/new/wp-content/uploads/2024/04/voicemod-custom-voices-1.png"
        Direct=""/>

         <Section_Panjang 
        flex="row"
        Label="Record sound memes from any source." 
        Label2="From YouTube to in-game—capture and add sound clips straight into your soundboards! Missed the moment? Instant Replay lets you rewind up to 30 seconds and relive the hype."
        Button="Check Voicemod Recorder" 
        imgSrc="/GameFPS.png"
        Direct=""/>
        
        
    </div>
    );
}