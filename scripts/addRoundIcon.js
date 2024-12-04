const fs = require('fs');
const path = require('path');

module.exports = function(context) {
    const manifestPath = path.join(context.opts.projectRoot, 'platforms/android/app/src/main/AndroidManifest.xml');
    if (fs.existsSync(manifestPath)) {
        let manifest = fs.readFileSync(manifestPath, 'utf-8');
        if (!manifest.includes('android:roundIcon')) {
            manifest = manifest.replace(
                '<application',
                '<application android:roundIcon="@mipmap/ic_launcher_round"'
            );
            fs.writeFileSync(manifestPath, manifest, 'utf-8');
            console.log('Added android:roundIcon to AndroidManifest.xml');
        }
    }
};
