import { IllegalStateError, UnsupportedOperationError } from '@dialectlabs/sdk';

export function requireSingleMember<T>(members: T[]) {
  if (members.length !== 1) {
    throw new UnsupportedOperationError(
      `Unsupported operation', 'Only P2P threads are supported: expected 2 members, but got ${members.length}`,
    );
  }
  const member = members[0];
  if (!member) {
    throw new IllegalStateError(`Cannot happen`);
  }
  return member;
}

export function requireAtLeastOneMember<T>(members: T[]) {
  if (members.length < 1) {
    throw new UnsupportedOperationError(
      'Unsupported operation',
      'At least one member should be specified',
    );
  }
  return members;
}
