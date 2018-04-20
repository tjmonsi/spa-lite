import firebase from 'firebase/app';
import 'firebase/database';
import { updateState, currentState } from './state-manager';
const conferenceId = '-L6UuuMqtIizEXWrUZhD';
const version = 'v2';
const config = {
  apiKey: 'AIzaSyD9nU_bxcZQdAN0eGtbGqrZ099_wlbPAKY',
  authDomain: 'chi-conference-data.firebaseapp.com',
  databaseURL: 'https://chi-conference-data.firebaseio.com',
  projectId: 'chi-conference-data',
  storageBucket: 'chi-conference-data.appspot.com',
  messagingSenderId: '150866590334'
};

firebase.initializeApp(config);

let items = [];

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const updateData = () => {
  const list = currentState['list'] || [];
  updateState('list', [ ...list, ...items ]);
  items = [];
}

const debouncedUpdateData = debounce(updateData, 300);

firebase.database().ref(version + '/sessionModel/session').on('child_added', snapshot => {
  items.push(snapshot.val().title);
  debouncedUpdateData();
})