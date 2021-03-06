import { Heading } from 'components';
import { SiteSettings, AppSettings, ColorSettings, AdminSettings } from './sections';
import './Settings.styles.scss';

function Settings() {
  return (
    <div className="settings-page">
      <div>
        <Heading>Settings</Heading>
      </div>
      <div className="settings-page__cards">
        <SiteSettings />
        <AppSettings />
        <ColorSettings />
        <AdminSettings />
      </div>
    </div>
  );
}

export default Settings;
