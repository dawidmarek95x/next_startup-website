import ceoAvatar from '../images/team/CEO-avatar.svg?url';
import ctoAvatar from '../images/team/CTO-avatar.svg?url';
import designerAvatar from '../images/team//Designer-avatar.svg?url';
import developerAvatar from '../images/team//Developer-avatar.svg?url';

interface CardData {
  label: string;
  header: string;
  subHeader: string;
}
interface TeamMember {
  avatar: {
    src: string;
  };
  name: string;
  position: string;
}

export const cardData: CardData = {
  label: 'Team',
  header: 'Our Talents',
  subHeader:
    'Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,',
};

export const teamMembers: TeamMember[] = [
  {
    avatar: {
      src: ceoAvatar,
    },
    name: 'Peg Legge',
    position: 'CEO',
  },
  {
    avatar: {
      src: ctoAvatar,
    },
    name: 'Richard Guerra',
    position: 'CTO',
  },
  {
    avatar: {
      src: designerAvatar,
    },
    name: 'Alexandra Stolz',
    position: 'Designer',
  },
  {
    avatar: {
      src: developerAvatar,
    },
    name: 'Janet Bray',
    position: 'Developer',
  },
];
