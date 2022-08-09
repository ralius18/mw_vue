<template>
  <Tabs active="lyrics" />

  <v-container class="lyrics d-flex flex-row" v-if="!isMobile()">
    <v-tabs
      direction="vertical"
      v-model="tab"
    >
      <v-tab
        v-for="item in songs"
        :value="item.value"
        :key="item.value"
      >
        <span class="text-capitalize font-weight-bold">
          {{ item.title }}
        </span>
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item
        v-for="item in songs"
        :value="item.value"
        :key="item.value"
        transition="false"
        reverse-transition="false"
      >
      <span class="text-capitalize font-weight-bold">{{ item.title }}</span>
      <pre class="lyric-text">{{ item.lyrics }}</pre>
      </v-window-item>
    </v-window>
  </v-container>

  <v-container class="lyrics mobile-content" v-else>
    <v-tabs
      direction="vertical"
      v-model="tab"
      v-if="tab == ''"
    >
      <v-tab style="display: none" value=""></v-tab>
      <v-tab
        v-for="item in songs"
        :value="item.value"
        :key="item.value"
      >
        <span class="text-capitalize font-weight-bold">
          {{ item.title }}
        </span>
      </v-tab>
    </v-tabs>

    <v-container class="mobile-lyrics" v-else>
      <MwBtn class="back-btn" @click="clearSelectedTab()">Back</MwBtn>
      <v-window v-model="tab">
        <v-window-item
          v-for="item in songs"
          :value="item.value"
          :key="item.value"
          transition="false"
          reverse-transition="false"
        >
        <span class="text-capitalize font-weight-bold">{{ item.title }}</span>
        <pre class="lyric-text">{{ item.lyrics }}</pre>
        </v-window-item>
      </v-window>
      <MwBtn class="back-btn" @click="clearSelectedTab()">Back</MwBtn>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import Tabs from '@/components/Tabs.vue';
import MwBtn from '@/components/MwBtn.vue';

export default defineComponent({
  name: 'LyricsView',

  data: () => {
    return {
      tab: '',
      songs: [
        { 
          value: 'castles',
          title: 'Castles',
          lyrics: `I walk alone here through pouring rain\n\
This feeling inside tells me that something's changed\n\
\n\
Cos from the day that I heard your name\n\
I knew my life just would not be the same\n\
Now every time that I close my eyes\n\
Your smile stares right back at me and I'm alright\n\
\n\
Sometimes when I fall asleep at night\n\
I'm just waiting for my phone's green light\n\
And sound that tells me that you're still around\n\
\n\
Cos from the day that I heard your name\n\
I knew my life just would not be the same\n\
Now every time that I close my eyes\n\
Your smile stares right back at me and I'm alright\n\
\n\
Because when shadows take my sight you make my world seem so bright\n\
Bring my world back to life, bring my world back to life\n\
Because when shadows take my sight you make my world seem so bright\n\
Bring my world back to life, bring my world back to life\n\
And in these darkened halls you helped me find the light\n\
You brought me back to life\n\
\n\
But the dogs they came to find you\n\
Dragged you back into the dark\n\
Glass castle walls you've built alone crash down around your heart\n\
So I'll speak to you in silence (Keep me safe inside)\n\
And take your hand in mine\n\
Draw you back into our castle and keep you safe inside\n\
\n\
Cos from the day that I heard your name\n\
I knew my life just would not be the same\n\
Now every time that I close my eyes\n\
Your smile stares right back at me and I'm alright\n\
Draw you back into our castle\n\
Keep me safe inside`
        },
        { 
          value: 'collapse',
          title: 'Collapse',
          lyrics: `I can't find ground, I'm upside down\n\
A hurricane of harrowed thoughts spin me around\n\
\n\
How could I have been wrong\n\
To not let you sing along\n\
I'm lost in my head\n\
Stuck in this same place again\n\
\n\
My eyes bright red, rolling back into my head\n\
I'm coming undone, and I could use someone\n\
\n\
How could I have been wrong\n\
To not let you sing along\n\
I'm lost in my head\n\
Stuck in this same place again\n\
\n\
When gravity collapses beneath my feet\n\
You're the only one, the only one I need\n\
When gravity collapses beneath my feet\n\
You're the only one who can help me\n\
\n\
How could I have been wrong\n\
To not let you sing along\n\
I'm lost in my head\n\
Stuck in this same place again\n\
Again\n`
        },
        { 
          value: 'eyelids',
          title: 'Eyelids',
          lyrics: `I hope you're doing well and I wish you all the best\n\
Because after all you took the best of me\n\
I just hope you're happy with the choice you made\n\
To walk away that night to sleep with him instead of me\n\
Fuck\n\
\n\
It's fine that you're a liar, now I get that that's your thing\n\
But it makes me question everything you told me honestly\n\
Sometimes I wonder if I loved you at all\n\
Or if all I loved was a character that you invented\n\
\n\
What does it mean when I still want you?\n\
(What does it mean when I still want you?)\n\
You screwed me over, ran away but somehow I still need you\n\
I never wanna see your face again but for some reason\n\
You're still upon the inside of my eyelids\n\
\n\
The diamonds grown dull and the flowers wilted\n\
I gave away the lights and your song has faded into\n\
Memory is all that's left of you because I\n\
Made it a rule to break and burn everything left behind\n\
\n\
Woah-oh-oh-oh-oh-oh\n\
Woah-oh-oh-oh-oh-oh\n\
\n\
What does it mean when I still want you?\n\
(What does it mean when I still want you?)\n\
You screwed me over, ran away but somehow I still need you\n\
I never wanna see your face again but for some reason\n\
You're still upon the inside of my eyelids\n`
        },
        { 
          value: 'forgotten_oath',
          title: 'Forgotten Oath',
          lyrics: `You're tidal, eternal\n\
Your ebb and flow the strongest hold\n\
Never thought that my faith would wane\n\
But I never thought I'd be on my own\n\
You abandoned me here, You left me on my own\n\
\n\
I will not bow and scrape, bend my knee for your sake\n\
Breaking I've lost all my faith in all that you are\n\
Wandering streets in the night, begging with headlights\n\
To take me away from this place of remorse and disgust, with what I've become\n\
\n\
Now I'm liberated from your arms\n\
Overwhelmed by the emptiness\n\
My world faded and starved while I was your puppet\n\
You abandoned me here, Were you ever sincere, Tell me\n\
\n\
I will not bow and scrape, bend my knee for your sake\n\
Breaking I've lost all my faith in all that you are\n\
Wandering streets in the night, begging with headlights\n\
To take me away from this place of remorse and disgust, with what I've become\n\
\n\
Couldn't see your dark side, all that you tried to hide\n\
Tangled within your net, manipulated\n\
Now I've seen your dark side, all that you tried to hide\n\
Free from within your net, I'm the catch you should have kept\n\
\n\
I will not bow and scrape, bend my knee for your sake\n\
Breaking I've lost all my faith in all that you are\n\
Wandering streets in the night, begging with headlights\n\
To take me away from this place of remorse and disgust, with what I've become\n\
With what I've become\n`
        },
        { 
          value: 'from_my_chest',
          title: 'From My Chest',
          lyrics: `Your sleeves, sewn to your palms, to hide the journey on your arms\n\
But I'll have you know, you're perfect in every way to me\n\
You're not, just a passing thought, that sometimes wanders through\n\
The day that we met we set this firm\n\
My mind's a mansion where you dwell and\n\
\n\
If your blood boils black\n\
I'll transfuse you some colour\n\
From my chest to your chest\n\
You're the best, thing I've ever known\n\
And I'll hold you through it all\n\
Even if your blood boils black\n\
\n\
I'll take, the scars around your soul,\n\
and kiss every one\n\
Can't claim to heal but know that you are not alone\n\
Stand back\n\
Watch this bloom\n\
A home that's built to last\n\
We'll lay it stone by stone\n\
Don't leave me alone\n\
\n\
If your blood boils black\n\
I'll transfuse you some colour\n\
From my chest to your chest\n\
You're the best, thing I've ever known\n\
And I'll hold you through it all\n\
Even if your blood boils black\n\
\n\
I want, so much more, for you\n\
Than the shit\n\
This world has to offer\n\
I want, so much more, for you\n\
\n\
If your blood boils black\n\
I'll transfuse you some colour\n\
From my chest to your chest\n\
You're the best, thing I've ever known\n\
And I'll hold you through it all\n\
Even if your blood boils black\n\
\n\
No ashes (You're the best)\n\
No crashing down\n\
\n\
From my chest to your chest, if your blood boils\n`
        },
        { 
          value: 'ghost',
          title: 'Ghost',
          lyrics: `I feel time start skipping, my eyes see through a blur\n\
I choke on words unwritten, my heart stone cold and torn\n\
I know I left you stranded, when you needed me most\n\
I know I felt abandoned, cos I was living with a ghost\n\
\n\
I had no choice, I knew you weren't happy\n\
I had no choice, I had no choice\n\
\n\
In open water I'm drifting out to sea\n\
The water fills my lungs, now it has taken me\n\
Light fades away as I fall deeper, the current drags me back to shore\n\
My life forgotten, once broken and ignored\n\
\n\
How'd you feel that it's it's fine, to push me away and still be mine\n\
You knew we were both unhappy, but you still thought we'd marry\n\
I knew I had to get out, so you could have no more doubts\n\
Don't say I gave no warning, You'd never fucking listen\n\
\n\
I had no choice, I knew you weren't happy\n\
I had no choice, I had no choice\n\
\n\
In open water I'm drifting out to sea\n\
The water fills my lungs, now it has taken me\n\
Light fades away as I fall deeper, the current drags me back to shore\n\
My life forgotten, once broken and ignored\n\
\n\
<i>(Instrumental)</i>\n\
\n\
In open water I'm drifting out to sea\n\
The water fills my lungs, now it has taken me\n\
Light fades away as I fall deeper, the current drags me back to shore\n\
My life forgotten, once broken and ignored\n`
        },
        { 
          value: 'hurting_you',
          title: 'Hurting You (By Hurting Me)',
          lyrics: `Don't want to be an inconvenience\n\
Never wanted pressure for you\n\
Ribs retaining pounding sentiments\n\
Holding back the truth\n\
The truth\n\
\n\
I wish I didn't care about you and complicate things so\n\
I'm hurting you by hurting me, but somehow I can't let go\n\
Didn't mean to be so awkward, was never my intent\n\
And now I'm hurting you by hurting me\n\
\n\
In your presence I'm paralysed\n\
But perfectly at peace\n\
A decade's passed and then some\n\
The long night has begun\n\
\n\
I wish I didn't care about you and complicate things so\n\
I'm hurting you by hurting me, but somehow I can't let go\n\
Didn't mean to be so awkward, was never my intent\n\
And now I'm hurting you by hurting me\n\
\n\
Woah-oh-oh-oh-oh-oh Can only hide for so long\n\
Woah-oh-oh-oh-oh-oh You're everything I want\n\
Woah-oh-oh-oh-oh-oh When we touch everything stops\n\
Woah-oh-oh-ooooh-oh\n\
\n\
I'll be your Mr Brightside on the side\n\
Way past caring if I'm the only one in your life\n\
But I'm a shit friend cos I can't tell you to dump his lying ass\n\
Cos that would be a conflict, is it my agenda?\n\
To state all that's in my mind would be duplicitous\n\
Don't want to be insidious, just want to keep you whole\n\
But some things you've got to learn in your own time\n\
When it tumbles down, I hope you know\n\
I will pick up the shards, because\n\
I've got your back, I'm on your side\n\
I will defend, Your every perfect angle\n\
\n\
Don't want to be an inconvenience\n\
But this keeps breaking through\n\
Bound with marigolds and violets\n\
Lay this heart in deeper tombs\n\
Until I see your face, cos...\n\
\n\
Woah-oh-oh-oh-oh-oh Can only hide for so long\n\
Woah-oh-oh-oh-oh-oh You're everything I want\n\
Woah-oh-oh-oh-oh-oh When we touch everything stops\n\
\n\
Woah-oh-oh-oh-oh-oh Can only hide for so long\n\
Woah-oh-oh-oh-oh-oh You're everything I want\n\
Woah-oh-oh-oh-oh-oh When we touch everything stops\n\
Woah-oh-oh-ooooh-oh\n`
        },
        { 
          value: 'icarus',
          title: 'Icarus',
          lyrics: `I follow streetlights home embracing the great unknown\n\
Eyes at my feet, nothing but empty streets\n\
You can't help what's dead so just bury me\n\
Alone in my head\n\
Just bury me\n\
\n\
I'm walking on glass (I'm walking on glass)\n\
My head held in shaking hands\n\
I'm falling too fast (I'm falling too fast)\n\
No chance for a safe impact\n\
\n\
Everything I try to build crumbles right in front of me\n\
Now I stand here in the rubble, wondering what I could have been (Just bury me)\n\
There's ropes around me feet holding me back\n\
And this knife's out of reach to set me free\n\
I'll never be free\n\
\n\
I'm walking on glass (I'm walking on glass)\n\
My head held in shaking hands\n\
I'm falling too fast (I'm falling too fast)\n\
No chance for a safe impact\n\
\n\
You swept me off of my feet but never bothered to catch me\n\
But I still think there's hope for me out there\n\
Somewhere out there\n\
\n\
There's wings on my back made of feather and wax\n\
As I look to the sky, I can't help but ask why\n\
I fall faster than I fly, I fall faster\n\
There's wings on my back made of feather and wax\n\
As I look to the sky, I can't help but ask why\n\
I fall faster than I fly, I fall faster\n\
\n\
I'm walking on glass (I'm walking on glass)\n\
My head held in shaking hands\n\
I'm falling too fast (I'm falling too fast)\n\
No chance for a safe impact\n\
You swept me off of my feet but never bothered to catch me\n\
But I still think there's hope for me out there\n\
Somewhere out there\n`
        },
        { 
          value: 'internal',
          title: 'Internal',
          lyrics: `A shadow hand reached out to touch me\n\
It lingers in my thoughts of what might be\n\
I feel heavier the more I think\n\
The more I think\n\
\n\
Before I know this hand has taken hold\n\
It pulls me back infecting all I know\n\
I'm on my knees, this darkness smothers me\n\
I'm choking every time I breathe\n\
\n\
If I open up my eyes\n\
Will I see the sun shine\n\
Or will I see what's in my mind, an endless night\n\
Following voices as my guide\n\
\n\
Before I know I'm underneath it all\n\
The shadow's lost control, I cannot speak at all\n\
I'm building up my walls to hide behind a smile\n\
I'm choking up inside while the world watches me breathe\n`
        },
        { 
          value: 'okay',
          title: 'It\'ll Be Okay',
          lyrics: `We were going to raise our family\n\
Who knows how things could be\n\
If we'd met earlier without traumatic history\n\
But I never thought I'd feel anything like the love we share\n\
The tree we met by everyday\n\
They'll cut it down soon enough\n\
\n\
It's been two weeks now without you\n\
Well what am I supposed to do?\n\
How do I raise our children with this cavern left inside?\n\
The tree we met by everyday\n\
It's the place you left me\n\
Why would you taint that?\n\
They'll cut it down soon enough\n\
\n\
Don't leave the shore just yet\n\
Cos I'm not sure if there's a right choice\n\
My mind's too fogged to make it out\n\
The tree we met by everyday\n\
I am on my way there\n\
Tell me what to do\n\
They'll cut it down soon enough\n\
\n\
I curse that you left\n\
But I don't hate you, no\n\
I can't be without you, no\n\
I've never felt so alone\n\
I can't wait\n\
So I'll meet you there tonight\n\
\n\
I'm on my way\n\
With our son and daughter\n\
Don't cross the water just you wait for us\n\
By the riverbank\n\
Don't cross just yet\n\
I've made up my mind\n\
We'll see you soon\n\
We're on our way\n\
\n\
Plead to the gods you're waiting for me\n\
Even if we never meet them\n\
The four of us together\n\
I guess it must be heaven\n\
I'm on my way\n\
\n\
Tell the kids it'll be okay`
        },
        { 
          value: 'ivory',
          title: 'Ivory Walls',
          lyrics: `It's indecorous to return to your bed, when I know before I'm gone\n\
You're filled with regret\n\
But how can I leave my side made, when all I want's to keep you safe\n\
And you don't do well alone\n\
\n\
Where do you go when you retreat inside your head?\n\
I do not know how to reach beyond your ivory walls\n\
\n\
There's no point to a lifeline that you won't take (But I'll throw it anyway)\n\
I have frayed and faded waiting for your hand\n\
But I'd tread seas and traverse oceans all my years (All your years) for just a day\n\
\n\
Where do you go when you retreat inside your head? (Where do you go?)\n\
I do not know how to reach beyond your ivory walls\n\
And lift you up and pull you out and show you I'm always on your side\n\
Where do you go? Where do you go?\n\
\n\
And I'd wage war on the demons within your mind\n\
Burn down thorns and thickets wild around your heart (Anything to help it beat again)\n\
I'd do it all a thousand times for just a smile\n\
\n\
Where do you go when you retreat inside your head? (Inside my head)\n\
I do not know how to reach beyond your ivory walls\n\
And lift you up and pull you out and show you I'm always on your side\n\
Where do you go? Where do you go?\n`
        },
        { 
          value: 'lately',
          title: 'Lately',
          lyrics: `Seems we haven't spoken for a couple weeks\n\
Used to be not an hour'd go by without you on my mind\n\
\n\
Now we hold each other at arm's length to avoid causing pain\n\
But darling can't you see our hands are barely even touching anymore\n\
\n\
I've been thinking lately\n\
What this life would be like if I didn't have you here\n\
Cos you know honestly it would be hard slightly\n\
But I think in time I would get on just fine\n\
I'd be just fine\n\
\n\
I think we've been living too much in the reaches of time\n\
All our focus is on the future and the past\n\
Somehow we've neglected the one thing that really mattered\n\
The here and now, the strength to make this last\n\
\n\
And now we hold each other at arm's length to avoid causing pain\n\
But darling can't you see our hands are barely even touching anymore\n\
\n\
I've been thinking lately\n\
What this life would be like if I didn't have you here\n\
Cos you know honestly it would be hard slightly\n\
But I think in time I would get on just fine\n\
I'd be just fine\n\
\n\
Take your allegations\n\
Recognise them as frustrations\n\
In your own inadequacies\n\
And I went through hell to find you\n\
And I know that you did too\n\
Maybe there's one more to navigate\n\
'Til we find something true\n\
\n\
Oh I've been thinking\n\
About what to do without you\n\
\n\
I've been thinking lately\n\
What this life would be like if I didn't have you here\n\
Cos you know honestly it would be hard slightly\n\
But I think in time I would get on just fine\n\
I'd be just fine\n\
I've been thinking lately\n\
If I didn't have you\n`
        },
        { 
          value: 'losing_sheep',
          title: 'Losing Sheep',
          lyrics: `It's onwards and downwards from here\n\
It'd be a shame to break the cycle now\n\
Heard it said it's pretty pretty from the bottom\n\
Will I have time to see it coming?\n\
Will I have time to see it coming?\n\
\n\
If I'd gone straight from the womb to the grave like I wanted\n\
Then I'd have missed out on you (Missed out on you)\n\
I cannot be your saviour, most days I barely keep myself alive\n\
And I hope that's okay (Hope that's okay)\n\
\n\
I'll drown in every thought of you (However fleeting)\n\
Sinking through even the briefest moment\n\
I'll drown in every thought of you (However fleeting)\n\
Endlessly consumed, lost all direction\n\
\n\
I'd move half the world away from everything I know and friends I grew up\n\
Just to be with you (Just to be with you)\n\
Maybe if I love you, just enough\n\
Then I won't hate myself as much as I do\n\
\n\
I won't hate myself as much as I do\n\
If I drown in you\n\
\n\
Over losing sheep and counting sleep... Wait...\n\
I was hopelessly confused (Hopelessly confused)\n\
For the first time in a long time I'll make it through the night\n\
Cos you're by my side (You're by my side)\n\
\n\
It's onwards and downwards from here\n\
It'd be a shame to break the cycle now\n\
Heard it said it's pretty pretty from the bottom\n\
But I'm pretty far gone so it must be up and coming\n\
\n\
I'll drown in every thought of you (However fleeting)\n\
Sinking through even the briefest moment\n\
I'll drown in every thought of you (However fleeting)\n\
Endlessly consumed, lost all direction\n\
I'll drown in every thought of you (However fleeting)\n\
Sinking through even the briefest moment\n\
I'll drown in every thought of you (However fleeting)\n\
Endlessly consumed, lost all direction\n`
        },
        { 
          value: 'masquerade',
          title: 'Masquerade',
          lyrics: `Well I'm up for 36 and I'm down for 12\n\
I'm in a red eyed haze but know I'm not blazed\n\
I'm high on drifting by, barely touching down on life\n\
Is a new dawn still another day if I haven't slept in 38?\n\
I wish I could empty my mind and bid these failures goodbye\n\
\n\
But I'll keep up my masquerade that everything is quite okay\n\
While this tempest rages on inside\n\
It's getting to that point, where I lose control\n\
\n\
And if I fall would you catch me this time\n\
Cos I don't know if I will survive again\n\
These lines have set in\n\
Tracing cracks of heartache on my skin\n\
It's not the first time I've felt this strange\n\
But I thought it would fade away with age\n\
Seems it's here to stay\n\
Got me searching desperately for a change\n\
\n\
If I could do it all again, live life from start to end with no regrets\n\
Well I wouldn't take that chance\n\
And risk a second time in miserable existence\n\
If I could do it all again, live life from start to end with no regrets\n\
Well I wouldn't take that chance\n\
And risk a second time in miserable\n\
Where I'm in miserable existence\n\
\n\
It's time I lose control, and let the walls break down\n\
I'm sick of this fight, battling through life\n\
Don't want to do it anymore\n\
Because you're gone, there's no one left to calm the storm\n\
Behind the stone facade\n\
There's no peace, no still place\n\
I've got to let the tempest rage, and lose control\n\
\n\
So I'll keep up my masquerade that everything is quite okay\n\
While this tempest rages on inside\n\
It's getting to that point, where I lose control\n`
        },
        { 
          value: 'monster',
          title: 'Monster',
          lyrics: `You're blinded by the lies you've told, but look through my eyes\n\
The fading love we hold so low\n\
Might be easier to just let go\n\
\n\
Am I wrong for hating you\n\
For what you've done to for all I've been through\n\
\n\
What you need, is to lose it all\n\
But even then will those blinds you chose to hide behind\n\
Be rolled up away from your eyes\n\
\n\
Am I wrong for hating you\n\
For what you've done to for all I've been through\n\
Countless times you've made me numb\n\
To many more left to come\n\
You're the monster that broke my home\n\
\n\
You're the monster that broke my home\n\
\n\
Am I wrong for hating you\n\
For what you've done to for all I've been through\n\
Countless times you've made me numb\n\
To many more left to come\n\
You're the monster that broke my home\n\
You're a monster you broke my home\n`
        },
        { 
          value: 'open_hand',
          title: 'Open Hand',
          lyrics: `My affection's odious\n\
A mordant train, calmly coasting\n\
To you (to you)\n\
But you won't derail me\n\
Ever accepting despite how toxic I am\n\
Within (within)\n\
\n\
Golden dust on morning pane\n\
Your silhouette aflame, irrevocably burned into my brain\n\
Though I'm reticent, you see through the opaque\n\
Laid wholly bare yet still in this embrace\n\
This embrace\n\
\n\
Colours bled, from my life\n\
Seems it's been that way for some time\n\
But then you came\n\
But then you came\n\
\n\
I feel your fingers down my back\n\
My eyes well up my mind attacks\n\
You offer me your open hand\n\
I feel your fingers down my back\n\
My eyes well up, my mind attacks\n\
You offer me your open hand\n\
Keep me from falling\n`
        },
        { 
          value: 'to_go_from_here',
          title: 'To Go From Here',
          lyrics: `What comes next when it's all said and done\n\
I don't know where to go from here but I want you in my life always\n\
\n\
From late night bike rides over town and down your street\n\
If only I knew then where this would lead\n\
I wouldn't have spent so much time in circles gone\n\
I would have made it faster to your lawn\n\
\n\
Keep me upright keep me on my feet\n\
Cos when you're gone it's too easy to bleed\n\
\n\
What comes next when it's all said and done\n\
I don't know where to go from here but I want you in my life always\n\
Always\n\
\n\
You found this kid a fucked up mess with no esteem\n\
You rebuilt me from the ground up alone\n\
I can't deny I'm weak without your vertebrae\n\
How could I ever stand if you weren't here\n\
\n\
Keep me upright keep me on my feet\n\
Cos when you're gone it's too easy to bleed\n\
\n\
Keep the demons down with roses\n\
Soften sharp edges with your lips\n\
\n\
Keep the demons down with roses\n\
Soften sharp edges with your lips\n\
\n\
Keep the demons down with roses\n\
Soften sharp edges with your lips\n\
\n\
Keep me upright keep me on my feet\n\
(Keep the demons down with roses)\n\
Cos when you're gone it's too easy to bleed\n\
(Soften sharp edges with your lips)\n\
\n\
Keep the demons down\n\
With your lips\n`
        },
        { 
          value: 'viertame',
          title: 'Viertame Otro Tiro',
          lyrics: `If I slit gills in my throat then maybe I\n\
Can stop drowning in your flood of filthy lies\n\
If I could just catch a breath then maybe I\n\
Could find the strength to swim the violent tide\n\
\n\
I've already drunk my way through four limes\n\
I'm way past sober, stable, rational\n\
If you hadn't come back slinging shit again\n\
These thoughts would not be running through my head\n\
\n\
My brightest day with you was midnight on my own (I'm sorry)\n\
If you wanted to apologise you should pick up the phone (Didn't mean it)\n\
Cos your daddy devil's calling and he wants you home\n\
And I'm only too happy to send you down\n\
\n\
I'm sorry baby (oh down)\n\
It's all in your head (oh down)\n\
\n\
A shot down my throat and two to your chest\n\
My bottle is empty and so is your body\n\
This round is on me, you lose this time baby\n\
So thank you for playing but it's all over now\n`
        },
        { 
          value: 'yang',
          title: 'Yang',
          lyrics: `I close my eyes today, felt the sands slip away\n\
You look at me to say everything is okay\n\
I still love you the same\n\
\n\
You are the one who makes things right\n\
Just take me away\n\
For one more night\n\
Can you be my light?\n\
\n\
I saw you from across the street\n\
My heart it beats too fast to breathe\n\
I need you here with me\n\
But you're still out of reach\n\
That was before the day I knew you felt the same\n\
So take my hand and we can escape\n\
\n\
You are the one who makes things right\n\
Just take me away\n\
For one more night\n\
Can you be my light?\n\
\n\
Can you be my light\n\
So I can see within the walls of my mind\n\
It makes no difference, with eyes open or shut\n\
Can you be the door, show me a way\n\
And help me escape\n\
\n\
I saw you from across the street\n\
You look at me\n`
        },
        { 
          value: 'yin',
          title: 'Yin',
          lyrics: `Bitter bile bleached my bones, I understand I can't be your home\n\
And I will play okay, to keep your mind at ease\n\
Because your peace is all that matters to me\n\
\n\
I'm lost between the lines of love and logic\n\
I'm being torn apart\n\
\n\
I know it's fine it's not the end\n\
Even though the shadows, they eternally extend\n\
I'm caught between two sides, my calm and storm\n\
I can't go on, I'm lost as hell\n\
\n\
I will scream my eulogy to what now must decay\n\
Retreat behind blades barricades, don't want to be frozen\n\
You dropped me here, I won't survive\n\
\n\
I'm lost between the lines of love and logic\n\
I'm being torn apart\n\
\n\
I know it's fine it's not the end\n\
Even though the shadows, they eternally extend\n\
I'm caught between two sides, my calm and storm\n\
I can't go on, I'm lost as hell\n\
\n\
And if you ever hear these words\n\
Know that I don't hate you\n\
This is the worst part of me\n\
Everything you saw and could never love\n\
I wanna bleed and scream and end\n\
And claw myself open\n\
Ground myself in fresh wounds\n\
Is that too honest to say?\n\
Claw myself open, ground myself in fresh wounds\n\
Is that too honest to say?\n\
Is this just way too open?\n\
I'll never be enough\n\
\n\
And you know that I'll strive\n\
Oh god will I try\n\
To find some meaning again\n\
And you know that I'll strive\n\
Oh god will I try\n\
To find some meaning again\n\
A reason to go on\n\
Rotate the hourglass\n\
Whatever comes to pass\n\
I'll find some meaning again\n\
And you know that I'll strive\n\
Oh god will I try\n\
To find some meaning again\n`
        }
      ]
    }
  },

  components: {
    Tabs,
    MwBtn
  },

  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },

    clearSelectedTab() {
      this.$data.tab = '';
    }
  }
});
</script>

<style scoped lang="scss">
  .lyrics {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;

    &.mobile-content {
      max-width: 100%;

      .v-tabs {
        max-width: 100%;
      }
    }

    .v-tabs {
      max-width: 250px;
      .v-btn {
        font-family: "Roboto Condensed";
        font-weight: bold;
        border: 2px solid black;
        background: rgba(255, 255, 255, 0.25);
        color: black;
        letter-spacing: normal;
        font-size: medium;
        transition: all 200ms;

        &:not(:last-child) {
          border-bottom: none;
        }

        &.v-tab--selected {
          color: white;
          background-color: black;
        }

        &:hover {
          color: white;
          background-color: black;
        }
      }
    }
  }

  .lyric-text {
    font-family: "Roboto Condensed";
    padding-top: 16px;
    overflow-x: auto;
    white-space: pre-wrap;
  }

  .v-window {
    width: 100%;
    .v-window-item {
      border: 2px solid black;
      padding: 16px;
      background: rgba(255, 255, 255, 0.25)
    }
  }

  .back-btn {
    width: 100%;
    height: 48px;

    &:first-child {
      border-bottom: none;
    }

    &:last-child {
      border-top: none;
    }
  }

  .mobile-lyrics {
    padding: 0;
  }
</style>