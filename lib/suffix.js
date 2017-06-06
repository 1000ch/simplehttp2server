module.exports = () => {
  switch (process.platform) {
    case 'darwin':
      return '_darwin_amd64';
    case 'win32':
      return '_windows_amd64';
    case 'linux':
      switch (process.arch) {
        case 'arm':
          return '_linux_arm';
        case 'x64':
          return '_linux_amd64';
        default:
          return '_linux_386';
      }
    default:
      throw new Error(`No binary for ${process.platform}/${process.arch}`);
  }
};
