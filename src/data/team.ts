import ceoAvatar from '../images/team/CEO-avatar.svg?url';
import ctoAvatar from '../images/team/CTO-avatar.svg?url';
import designerAvatar from '../images/team//Designer-avatar.svg?url';
import developerAvatar from '../images/team//Developer-avatar.svg?url';

interface TeamMember {
  avatar: {
    src: string;
  };
  name: string;
  position: string;
}

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
