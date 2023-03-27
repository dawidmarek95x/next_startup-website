'use client';
import React, { HTMLAttributes, useState } from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

interface ExpandableArticleProps extends HTMLAttributes<HTMLElement> {
  title: string;
  content: string;
  hiddenContent?: string;
}

const ExpandableArticle = ({
  title,
  content,
  hiddenContent,
  ...props
}: ExpandableArticleProps) => {
  const [isHiddenContentShown, setIsHiddenContentShown] =
    useState<boolean>(false);

  const toggleHiddenContent = () => {
    setIsHiddenContentShown(!isHiddenContentShown);
  };

  const showHiddenContent = hiddenContent && isHiddenContentShown;

  return (
    <article {...props}>
      <Heading
        level={3}
        className="text-2xl lg:text-[28px] xl:text-[32px] xxl:text-[40px]"
      >
        {title}
      </Heading>
      <p className="py-5 text-black/75 xl:py-4">{content}</p>
      {showHiddenContent && (
        <p className="pb-5 text-black/75 xl:pb-4">{hiddenContent}</p>
      )}
      <Button variant="secondary" onClick={toggleHiddenContent}>
        {!isHiddenContentShown ? 'Learn More' : 'Hide content'}
      </Button>
    </article>
  );
};

export default ExpandableArticle;
