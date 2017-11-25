# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, length:{minimum: 6, allow_nil:true }
    validates :username, uniqueness: true

    before_validation :ensure_session_token

    has_many :events,
    primary_key: :id,
    foreign_key: :userId,
    class_name: :Event

    attr_reader :password
    def ensure_session_token
        self.session_token ||= generate_session_token()
    end

    def reset_session_token
        self.session_token = generate_session_token()
        save!
        self.session_token
    end

    def unset_session_token
        self.session_token = nil
    end
    
    def password=(password)
        @password=password
        self.password_digest=BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_cred(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            return user
        end
        nil
    end




        def generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

end
