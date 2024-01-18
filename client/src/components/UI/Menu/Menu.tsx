import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import { FC } from 'react';
import { PiForkKnifeThin } from 'react-icons/pi';
import { IDish } from '../../../types/Types';

interface IMenuProps {
  menu: IDish[];
}

export const Menu: FC<IMenuProps> = ({ menu }) => {
  return (
    <List>
      <VirtualList
        data={menu}
        height={menu.length > 0 ? menu.length * 15 : 800}
        itemHeight={47}
        itemKey="scroll"
      >
        {(dish: IDish) => (
          <List.Item key={dish.id}>
            <List.Item.Meta
              title={
                <div style={{ display: 'flex' }}>
                  <PiForkKnifeThin />
                  <p>{dish.name}</p>
                </div>
              }
            />
            <div>{dish.price}₽</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
