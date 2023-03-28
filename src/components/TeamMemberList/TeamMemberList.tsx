import React, { HTMLAttributes } from 'react';
import PersonCard from '../PersonCard/PersonCard';

interface TeamMemberListProps extends HTMLAttributes<HTMLElement> {
  data: TeamMember[];
  className?: string;
}

const TeamMemberList = ({ className, data, ...props }: TeamMemberListProps) => {
  return (
    <ul className={`${className ?? ''}`} {...props}>
      {data.map((m, idx) => (
        <li key={idx}>
          <PersonCard
            imgSource={m.avatar.src}
            imgAlt={`Avatar of ${m.name} working as ${m.position}`}
            name={m.name}
            position={m.position}
          />
        </li>
      ))}
    </ul>
  );
};

export default TeamMemberList;
