import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, soryByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	soryByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={soryByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render Exp with alt data correctly', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot():
});	

test('should handle text change', () => {
	const value = 'rent';
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});
	expect('setTextFilter').toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
	const value = 'date';
	wrapper.setProps({
		filters: altFilters
	});
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target: { value }
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0).add(8, 'years');
	wrapper.find('DateRangePicker').props('onDateChange')({ startDate, endDate });
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
	const calendarFocused = endDate;
	wrapper.find('DateRangePicker').props('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});