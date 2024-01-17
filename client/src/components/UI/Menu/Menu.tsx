import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { FC } from 'react';
import { IDish } from '../../../types/Types';

interface IMenuProps {
  restId?: number;
  menu: IDish[];
}

export const Menu: FC<IMenuProps> = ({ restId, menu }) => {
  return (
    <List>
      <VirtualList data={menu} itemHeight={47} itemKey="scroll">
        {(dish: IDish) => (
          <List.Item key={dish.id}>
            <List.Item.Meta title={<p>{dish.name}</p>} />
            <div>{dish.price}₽</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
