import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

import { Shell } from '@/components/layout/Shell';
import { ScanProvider } from '@/lib/store';

import Home from '@/pages/home';
import Scanner from '@/pages/scanner';
import Results from '@/pages/results';
import Dashboard from '@/pages/dashboard';
import Reports from '@/pages/reports';
import DemoSelector from '@/pages/demo';
import Presentation from '@/pages/presentation';
import Login from '@/pages/login';
import Signup from '@/pages/signup';

const queryClient = new QueryClient();

function Router() {
  return (
    <ScanProvider>
      <Shell>
        <RoutedErrorBoundary>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/scanner" component={Scanner} />
            <Route path="/results" component={Results} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reports" component={Reports} />
            <Route path="/demo" component={DemoSelector} />
            <Route path="/presentation" component={Presentation} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </RoutedErrorBoundary>
      </Shell>
    </ScanProvider>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
