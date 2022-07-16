const createTokenUser = (user) => {
  return {
    name: user.name,
    userId: user._id,
    role: user.role,
    email: user.email,
    organizer: user.organizer,
  };
};
const createTokenParticipant = (user) => {
  return {
    lastName: user.lastName,
    participantId: user._id,
    firstName: user.firstName,
    email: user.email,
    type: 'participant',
  };
};

module.exports = { createTokenUser, createTokenParticipant };
