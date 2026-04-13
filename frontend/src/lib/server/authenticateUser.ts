import { error, type RequestEvent } from '@sveltejs/kit';


export const authenticateUser = async (event: RequestEvent) => {
    const { cookies } = event;

    const accessToken = cookies.get('accessToken');
    const refreshToken = cookies.get('refreshToken');

    // console.log('All cookies: ');
    // console.log(cookies.getAll());
    if (!accessToken) {
        //console.log('No access token found');
        return null;
    }

    //	console.log('Access token found');

    try {
        // console.log('Attempting to fetch user...');
        const userResponse = await fetchUser(accessToken);


        if (!userResponse.ok) {
            if (userResponse.status === 401) {
                // console.log(
                // 	'Unauthorized to fetch user, access token invalid : ',
                // 	await userResponse.json()
                // );
                //throw error(500, 'Unauthorized error fetching user');


                //ATTEMPT REFRESH HERE
                if (!refreshToken) {
                    // console.log('No refresh token found');
                    // console.log('Deleting access token');
                    cookies.delete('accessToken', { path: '/' });
                    throw error(500, 'Refresh token not found');
                }

                try {
                    const refreshResponse = await fetch('http://localhost:3000/auth/refresh', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Refresh-Token': refreshToken
                        }
                    });

                    const refreshData = await refreshResponse.json();

                    if (!refreshResponse.ok) {
                        if (refreshResponse.status === 401) {
                            //console.log('Failed to refresh access token: ', refreshData);
                            //console.log('Deleting access and refresh tokens');
                            //log out, been too long
                            cookies.delete('accessToken', { path: '/' });
                            cookies.delete('refreshToken', { path: '/' });

                            return null;
                        } else {
                            //console.log('Failted to refresh access token, unexpected error: ', refreshData);
                            throw error(500, 'Unexpected error refreshing access token');
                        }
                    }
                    //				console.log('Successfully refreshed access token');

                    const newAccessToken = refreshData.accessToken;
                    cookies.set('accessToken', newAccessToken, {
                        path: '/',
                        httpOnly: true,
                        sameSite: 'strict'
                    });

                    const newRefreshToken = refreshData.refreshToken;
                    cookies.set('refreshToken', newRefreshToken, {
                        path: '/',
                        httpOnly: true,
                        sameSite: 'strict'
                    });

                    //				console.log('Refresh Data: ', refreshData);

                    // console.log('New access token: ', newAccessToken);
                    // console.log('New refresh token: ', newRefreshToken);

                    //RETRY FETCHING USER

                    const retryUserResponse = await fetchUser(newAccessToken);

                    if (!retryUserResponse.ok) {
                        // console.log('Unexpected error fetching user after refresh: ', await retryUserResponse.json());
                        throw error(500, 'Unexpected error fetching user after refresh');
                    }

                    const user = await retryUserResponse.json();
                    return user;

                } catch (err) {
                    console.log('Network error when refreshing access token: ', err);
                    throw error(500, 'Something went wrong');
                }


            } else {
                // console.log('Unexpected error fetching user: ', await userResponse.json());
                throw error(500, 'Unexpected error fetching user');
            }
        }
        // console.log('Successfully fetched user, attaching to locals');
        const user = await userResponse.json();
        //	console.log('User: ', user);
        return user;
    } catch (err) {
        console.log('Network error when fetching user: ', err);
        throw error(500, 'Something went wrong');
    }


};

async function fetchUser(accessToken: string) {
    return fetch('http://localhost:3000/users/me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}