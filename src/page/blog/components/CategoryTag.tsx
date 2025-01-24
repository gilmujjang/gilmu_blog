import React from 'react';

export type CategoryType = 'develope' | 'invest';

interface Props {
  type: CategoryType;
}

const CategoryTag = ({ type }: Props) => {
  const categoryType = (type: CategoryType) => {
    switch (type) {
      case 'develope':
        return 'Develope';
      case 'invest':
        return 'Invest';
    }
  };
  return (
    <span className="text-sm text-gray-600 rounded-lg px-2 py-0.5 bg-gray-200">
      {categoryType(type)}
    </span>
  );
};

export default CategoryTag;
