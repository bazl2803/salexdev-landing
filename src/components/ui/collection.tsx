"use client";

import React from "react";

/**
 * Collection Component
 */
interface CollectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children:
    | React.ReactElement<typeof CollectionItem>
    | React.ReactElement<typeof CollectionItem>[];
}

function Collection({ children }: CollectionProps) {
  return (
    <div
      className="flex snap-x snap-proximity flex-row flex-nowrap items-center gap-4 overflow-x-auto py-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {children}
    </div>
  );
}

/**
 * Collection Item Component
 */
type CollectionItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function CollectionItem({ className, ...props }: CollectionItemProps) {
  return <div className={`snap-start ${className}`} {...props} />;
}

/**
 * Assign Item as a static property of Collection
 */
Collection.Item = CollectionItem;

export { Collection };
