import { teamMembers } from '@/data/team';
import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import HeaderCard from '../HeaderCard/HeaderCard';
import TeamMemberList from '../TeamMemberList/TeamMemberList';

interface TeamProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

const Team = ({ className, ...props }: TeamProps) => {
  return (
    <section
      className={`pb-[39px] xxl:pb-[54px] ${className ?? ''}`}
      {...props}
    >
      <Container>
        <HeaderCard
          className="pb-[41px] text-center xs:max-w-[404px]"
          label="Team"
          header="Our Talents"
          subHeading="Lorem ipsum, dolor sit amet consectetur
        Suscipit nemo hic quos, ab,"
        />
        <TeamMemberList
          className="md: mb-[44px] flex flex-col items-center gap-y-[35px] gap-x-[47px] md:flex-row md:flex-wrap md:justify-center xxl:mb-[45px] xxl:justify-between"
          data={teamMembers}
        />
        <Button className="mx-auto" variant="secondary">
          View Team
        </Button>
      </Container>
    </section>
  );
};

export default Team;
