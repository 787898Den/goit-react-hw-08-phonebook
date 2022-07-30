import { useSelector, useDispatch } from 'react-redux';
import  {changeFilter} from 'redux/contacts/actions';
import { getFilter } from 'redux/contacts/selectors';
import { LabelFilter,TitleText, InputFilter } from './Filter.styled';

export const Filter = ({ title }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <LabelFilter>
      <TitleText>{title}</TitleText>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </LabelFilter>
  );
};