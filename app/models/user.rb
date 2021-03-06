class User < ApplicationRecord

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :first_name, :last_name, :birthdate, presence: true

    validate :valdiate_age

    def valdiate_age
        if birthdate.present? && birthdate > 18.years.ago.to_date
            errors.add(:base, 'Users must be over 18 years old')
        end
    end 

    has_many :listings, dependent: :destroy
    has_many :reservations, dependent: :destroy
    has_many :reviews, dependent: :destroy

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            @user
        else
            nil
        end
    end

    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    after_initialize :ensure_session_token
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
    
end
