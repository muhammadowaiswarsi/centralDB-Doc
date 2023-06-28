import React from 'react';
import CodeSnippet from '../../../components/codeSnippet';
import '../style.css';

const Content = () => {
  return (
    <div class='container mt-4 mb-4'>
      <div class='row justify-content-center'>
        <div class='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
          <div className='steps'>
            <h1 class='text-center'>C7 (Central' Generation Seven)</h1>
            <p class='text-center'>
              C7 (Central' Generation Seven) is a blockchain based on the X11 algorithm, designed
              for transmitting data through the block explorer. We have opted to remove Mysql and
              other databases in favor of a decentralized database (C7) to optimize trust. This
              allows us to decentralize our own web and mobile apps, as well as those of others. Be
              self-sufficient in everything.
            </p>
            <img
              src='https://raw.githubusercontent.com/openc7/c7/main/background.png'
              alt='alt text'
              style={{ maxWidth: '100%' }}
            />
            <CodeSnippet text={'sudo apt-get update'} />
            <CodeSnippet text={'sudo apt-get upgrade'} />
          </div>
          <div className='steps'>
            <h2 class='text-center'>Install the required dependencies.</h2>
            <CodeSnippet
              text={
                ' sudo apt-get install build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils python3 '
              }
            />
            <CodeSnippet
              text={
                ' libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-test-dev libboost-thread-dev libboost-all-dev '
              }
            />
            <CodeSnippet text={' libboost-program-options-dev'} />
            <CodeSnippet
              text={
                'sudo apt-get install libminiupnpc-dev libzmq3-dev libprotobuf-dev protobuf-compiler unzip software-properties-common'
              }
            />
          </div>
          <div className='steps'>
            <h2 class='text-center'>Install Berkeley DB for C7 (Central Generation Seven).</h2>
            <CodeSnippet text={'  sudo add-apt-repository ppa:bitcoin/bitcoin '} />
            <CodeSnippet text={'  sudo apt-get update '} />
            <CodeSnippet text={' sudo apt-get install libdb4.8-dev libdb4.8++-dev'} />
          </div>
          <div className='steps'>
            <h2 class='text-center'>Download the C7 and tools from Openc7.</h2>
            <p>
              Manually Install <span style={{ color: 'blue' }}> Download daemon </span>
            </p>
            <CodeSnippet
              text={
                ' wget "api.server.openc7.com/daemon/openc7-daemon-linux.tar.gz" -O openc7-daemon-linux.tar.gz '
              }
            />
            <p>
              Manually Install <span style={{ color: 'blue' }}> Download GT C7 </span>
            </p>
            <CodeSnippet
              text={
                ' wget "api.server.openc7.com/daemon/c7-qt-linux.tar.gz" -O c7-qt-linux.tar.gz '
              }
            />
          </div>
          <div className='steps'>
            <h2 class='text-center'>Extract the tar files.</h2>
            <CodeSnippet text={' tar -xzvf c7-daemon-linux.tar.gz'} />
            <CodeSnippet text={' tar -xzvf c7-qt-linux.tar.gz'} />
          </div>
          <div>
            <h2 class='text-center'>Install the OpenC7 and tools.</h2>
            <CodeSnippet text={'  sudo mv c7 c7-cli c7-tx /usr/bin/'} />
          </div>
          <div>
            <h2 class='text-center'>Create the config file.</h2>
            <CodeSnippet text={'  mkdir $HOME/.c7'} />
            <CodeSnippet text={' nano $HOME/.c7/c7.conf'} />
          </div>
          <div>
            <h2 class='text-center'>Paste the following lines in c7.conf.</h2>
            <CodeSnippet
              text={
                'rpcuser=???\nrpcpassword=???\nrpcallowip=127.0.0.1\nrpcport=10037\nlisten=1\nserver=1\naddnode=node.openc7.com'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
