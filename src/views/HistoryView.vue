<script setup lang="ts">
import TimelineArticle from '@/components/TimelineArticle.vue';

const history = {
  title: 'HISTORY OF EDDA',
  events: [
    {
      id: 'long-past',
      title: 'The Long Past',
      date: 'A time beyond reckoning',
      icon: 'time-trap.png',
      paragraphs: [
        'In the beginning, there was only <strong>Enoreth, the Sum of All Things</strong>. This was an age before time.',
      ],
    },
    {
      id: 'urdor',
      title: 'The Urdor',
      date: 'Millenia ago',
      icon: 'wind-hole.png',
      paragraphs: [
        `To fill the world with life, <strong>Enoreth</strong> separated three parts from
        itself; each parts was then split in two. From the first part were
        born <strong>Othar, The Oldfather</strong>, and <strong>Malak, The Lord of Lies</strong>. From the second
        part came <strong>Cerunnos, The Arbiter</strong>, and <strong>Ulat Banor, The Maelstrom</strong>. From
        the last came <strong>Eos, The Dawnbringer</strong>, and <strong>Eth Korel, The Duskfall</strong>.
        Separately, the benevolent powers are known as the <strong>Asier</strong>, and the
        malevolent as the <strong>Malor</strong>. Together, they are the <strong>Urdor</strong>. The balance
        of their constructive and destructive forces allowed for the cycles
        of nature and the existence of life.`,
      ],
    },
    {
      id: 'illyum',
      title: 'The Illyum',
      date: '1 First Age',
      icon: 'holy-oak.png',
      paragraphs: [
        `<strong>Enoreth</strong> itself created the first sentient race, the <strong>Illyum</strong>, born
        from the roots of <strong>Ael, the First Tree</strong>. Living among animals in
        <strong>Ulwyll, the Old Forest</strong>, the Illyum remained in balance with the
        natural world for millennia.`,
      ],
    },
    {
      id: 'war-of-schism',
      title: 'The War of the Schism',
      date: '41,032 First Age',
      icon: 'crossed-swords.png',
      paragraphs: [
        `Over millennia, the Asier and the Malor sought to compel the Illyum
        into their service. Over the ages, the Illyum became divided and
        eventually set upon one another in war. The War of the Schism raged
        in Ulwyll for nearly a thousand years, and the Asier and Malor
        brought forth beings from Eya and Mora to wage war alongside the
        ranks of the Illyum. As the years passed, each faction was changed
        by proximity to the power it served. Those that worshipped the Malor
        were fouled and their descendants are the orcs. Those that
        worshipped the Asier were blessed and their descendants are the
        elves.`,
      ],
    },
    {
      id: 'elves-passing',
      title: 'War\'s End and the Passing of the Elves',
      date: '42,004 First Age',
      icon: 'galleon.png',
      paragraphs: [
        `Though Enoreth had always refrained from direct involvement in the
        affairs of the world, the war raged for too long; it finally
        intervened to restore balance to Ulwyll. The Illyum were cast away
        from the First Tree, forced into exile from their ancient home, and
        they set across the sea to the west. Upon their arrival in Edda,
        those fouled by the Malor settled in the mountains of the far north;
        those blessed by the Asier settled in a forest in the farthest west,
        which they call Neywyll, the Young Forest.`,
        `The passing of the elves and orcs from Ulwyll marks the end of the
        First Age. During this time, the Urdor were also banished from
        Ulwyll and would wander the western lands throughout the Second Age.
        Though nearly all of the Illyum were cast away from the First Tree,
        a small group was selected from among them to remain in Ulwyll. They
        were sworn to uphold the balance of Enoreth and to protect the First
        Tree from outside forces, both evil and good.`,
      ],
    },
    {
      id: 'second-age',
      title: 'The Children of Eos',
      date: '1 Second Age',
      icon: 'ages.png',
      paragraphs: [
        `Upon their arrival in the west, the Urdor wandered the lands of
        Edda. As Eos traveled the world, she filled it with living things,
        among them the races of halflings, men, dwarves, and the jotnar.
        The Urdor enjoyed the adulation of the mortal races, and for a time,
        the balance held in Edda. Knowledge is shared among the races.`,
      ],
    },
    {
      id: 'black-rock',
      title: 'The Blackrock',
      date: '11,903 Second Age',
      icon: 'meteor-impact.png',
      paragraphs: ['Meteor strike'],
    },
    {
      id: 'great-war',
      title: 'The Great War Begins',
      date: '12,176 Second Age',
      icon: 'crossed-swords.png',
      paragraphs: [
        `Eventually, war became inevitable. The dwarves remained loyal to
        Othar and took up arms alongside the elves of Neywyll, while most
        jotnar swore loyalty to the Malor. The orcs emerged from the depths
        of the mountains to serve their dark masters in battle. Men were
        divided in their loyalties; nations and families alike were torn
        apart. The Great War would be fought by the pawns of the Asier and
        Malor for two centuries. During this time, many of the empires of
        men would be wiped from existence and the land itself was razed.`,
      ],
    },
    {
      id: 'plague-of-akura',
      title: 'The Plague of Akura',
      date: '12,179 Second Age',
      icon: 'death-juice.png',
      paragraphs: ['The people of Rajapun are dead'],
    },
    {
      id: 'great-betrayal',
      title: 'The Great Betrayal',
      date: '12,350 Second Age',
      icon: 'backstab.png',
      paragraphs: ['The elves are dead.'],
    },
    {
      id: 'rally-the-troops',
      title: 'Peace and the Godsdeath',
      date: '12,357 Second Age',
      icon: 'rally-the-troops.png',
      paragraphs: ['Peace comes, but lots of people are dead. The beginning of the Last Age.'],
    },
    {
      id: 'andor-rebellion',
      title: 'The Andor Rebellion',
      date: '680 Last Age',
      icon: 'sword-brandish.png',
      paragraphs: ['The men of Andor overthrow'],
    },
  ],
};
</script>

<template>
  <TimelineArticle :events="history.events"/>
</template>
