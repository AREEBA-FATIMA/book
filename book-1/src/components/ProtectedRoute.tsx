import React, { useEffect } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, loading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const loginUrl = useBaseUrl('/login');

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            // Redirect to login with baseUrl, save current path
            history.push(loginUrl, { from: location.pathname });
        }
    }, [loading, isAuthenticated, history, location, loginUrl]);

    // Show loading while checking auth
    if (loading) {
        return (
            <div style={{ padding: '3rem', textAlign: 'center' }}>
                <div>Loading...</div>
            </div>
        );
    }

    // If not authenticated, don't render (useEffect will redirect)
    if (!isAuthenticated) {
        return null;
    }

    // Authenticated - render children
    return <>{children}</>;
}
