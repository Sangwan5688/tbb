export const blogs = {
  install_ipa_on_iphone: {
    title: 'How to install IPA on iPhone',
    subtitle: 'A Guide Without Jailbreaking',
    image: '/assets/iphone.webp',
    link: '/blogs/install_ipa_on_iphone',
    related: [{ key: 'arm64_vs_armeabi' }],
    tags: new Set(['mobile', 'ios', 'ipa', 'iphone', 'jailbreak', 'install', 'guide']),
  },
  arm64_vs_armeabi: {
    title: 'What\'s the difference between Arm64 & Armeabi',
    subtitle: 'Understanding Which App to Download for Your Device',
    image: '/assets/arch_version.webp',
    link: '/blogs/arm64_vs_armeabi',
    related: [{ key: 'install_ipa_on_iphone' }],
    tags: new Set(['mobile', 'android', 'arm64', 'armeabi', 'architecture']),
  },
  'getting-started-with-flutter': {
    title: 'Flutter App Development',
    subtitle: 'Getting started with Flutter',
    image: '/assets/flutter.webp',
    link: '/blogs/getting-started-with-flutter',
    related: [],
    tags: new Set(['mobile', 'flutter', 'app', 'app development', 'install', 'guide']),
  },
  'how-to-download-torrent-to-google-drive': {
    title: 'How to download Torrent directly to Google Drive',
    subtitle: 'Download torrent directly to Google Drive without downloading',
    image: '/assets/torrent_to_gdrive.webp',
    link: '/blogs/how-to-download-torrent-to-google-drive',
    related: [],
    tags: new Set(['torrent', 'google drive', 'download', 'guide']),
  },
  coming_soon: {
    subtitle: 'Coming Soon',
    image: '/assets/home_header_laptop.webp',
    link: '#',
    related: [],
  },
};

export const recentPosts = [
  'install_ipa_on_iphone',
  'arm64_vs_armeabi',
  'getting-started-with-flutter',
  'how-to-download-torrent-to-google-drive',
  'coming_soon',
];
