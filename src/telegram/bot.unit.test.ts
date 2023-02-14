import bot from './bot';

test('telegram bot created', () => {
	expect(bot).not.toBeNull();
});