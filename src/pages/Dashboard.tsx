import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { auth } from '../lib/mockAuth';

/**
 * Minimal Dashboard placeholder
 * TODO: Add workspace browser, template library, search functionality
 */
export function Dashboard() {
  const navigate = useNavigate();
  const user = auth.getCurrentUser();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  const handleOpenWorkspace = () => {
    // Navigate to existing workspace editor
    navigate('/workspace');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Simple top nav */}
      <nav className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              BS
            </div>
            <h1 className="text-xl font-semibold text-neutral-900">Bridge System</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-600">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Your Workspaces</h2>
          <p className="text-neutral-600">Manage your bridge bidding systems</p>
        </div>

        {/* Placeholder workspace card */}
        <div className="grid grid-cols-3 gap-6">
          {/* Create new workspace card */}
          <button
            onClick={handleOpenWorkspace}
            className="border-2 border-dashed border-neutral-300 rounded-lg p-8 hover:border-primary hover:bg-primary-50/50 transition-colors group"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Plus className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-neutral-900">Open Workspace Editor</span>
              <span className="text-xs text-neutral-600">Access your existing workspace</span>
            </div>
          </button>

          {/* Example workspace card (placeholder) */}
          <div className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
            <h3 className="text-lg font-medium text-neutral-900 mb-2">My System</h3>
            <p className="text-sm text-neutral-600 mb-4">Last edited 2 days ago</p>
            <div className="text-xs text-neutral-500">5 elements • 2 tables</div>
          </div>
        </div>

        {/* Info box */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-medium text-blue-900 mb-2">🚧 Dashboard Under Construction</h3>
          <p className="text-sm text-blue-800">
            This is a minimal placeholder. Full dashboard with workspace browser, templates, and search coming soon.
          </p>
          <p className="text-sm text-blue-800 mt-2">
            Click "Open Workspace Editor" above to access the existing workspace system.
          </p>
        </div>
      </main>
    </div>
  );
}
