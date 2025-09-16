import { Button } from '@/components/ui/button';
import { jsonStringify } from '@/lib/utils';
import { signOutUser } from '@/utils/firebase/userActions';
import type { RootState } from '@/utils/store/appStore';
import { useSelector } from 'react-redux';

export default function Browse() {
	const user = useSelector((state: RootState) => state.user);
	// const selector = { name: 'aks' };
	return (
		<div>
			Browse
			<pre>{jsonStringify(user)}</pre>
			<Button
				size={'sm'}
				onClick={() => {
					signOutUser();
				}}>
				Signout
			</Button>
		</div>
	);
}
